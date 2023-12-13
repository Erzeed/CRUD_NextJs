import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "CRUD | NextJs",
  description: "Crud application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>NextCRUD App</title>
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
