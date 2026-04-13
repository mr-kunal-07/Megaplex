import { getContent } from "../lib/api";
import HomeClient from "../components/HomeClient";

export const revalidate = 10; // ISR: revalidate every 10 seconds

export default async function HomePage() {
  let content = null;
  try {
    content = await getContent();
  } catch (e) {
    console.error("Failed to fetch content:", e.message);
  }

  return <HomeClient content={content} />;
}
