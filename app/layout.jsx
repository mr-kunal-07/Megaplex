import "./globals.css";

export const metadata = {
  title: "Megaplex Prime Infinity",
  description: "Luxury Real Estate — Smart 1 BHK & Premium 2 BHK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
