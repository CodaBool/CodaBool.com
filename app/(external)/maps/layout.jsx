export const metadata = {
  title: 'Maps in Cyberspace',
  description: 'redirect back to maps in cyberspace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-800">
      <body>{children}</body>
    </html>
  )
}
