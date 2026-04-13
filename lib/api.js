import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { DEFAULT_CONTENT } from "./defaultContent";

// ── Get Content from Firestore ──────────────────────────────────────────────────
export const getContent = async () => {
  try {
    const docRef = doc(db, "content", "default");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No content document found in Firestore");
      return null;
    }
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};

// ── Initialize Content in Firestore ──────────────────────────────────────────────
export const initializeContent = async () => {
  try {
    const docRef = doc(db, "content", "default");
    await setDoc(docRef, DEFAULT_CONTENT);
    console.log("✓ Firestore initialized with default content");
    return { success: true, message: "Content initialized successfully" };
  } catch (error) {
    console.error("Error initializing content:", error);
    throw error;
  }
};

// ── Update Section in Firestore ──────────────────────────────────────────────────
export const updateSection = async (section, data) => {
  try {
    const docRef = doc(db, "content", "default");
    const currentData = await getDoc(docRef);

    const updatedContent = {
      ...(currentData.exists() ? currentData.data() : {}),
      [section]: data,
    };

    await setDoc(docRef, updatedContent, { merge: true });
    return updatedContent;
  } catch (error) {
    console.error("Error updating section:", error);
    throw error;
  }
};

// ── Admin Login with Fixed Credentials ──────────────────────────────────────
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

export const loginAdmin = async (email, password) => {
  try {
    // Check against fixed credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate a token (simple JWT-like format for client-side use)
      const token = btoa(JSON.stringify({ email, timestamp: Date.now() }));

      return {
        success: true,
        user: { email, uid: "admin_user" },
        token: token,
        email: email,
      };
    } else {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }
  } catch (error) {
    console.error("Admin login error:", error);
    return {
      success: false,
      error: error.message
    };
  }
};
