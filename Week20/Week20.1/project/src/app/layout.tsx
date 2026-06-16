import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Week 20.1",
  description: "Week 20.1 lecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
