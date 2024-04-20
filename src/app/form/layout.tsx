export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="bg-gray-200 w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
