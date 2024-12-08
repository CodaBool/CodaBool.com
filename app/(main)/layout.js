import { Inter } from "next/font/google"
import NavBar from '@/components/ui/navbar'
import Footer from '@/components/ui/Footer'
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CodaBool",
  description: "Portfolio site for CodaBool, see all projects and blog posts",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className={inter.className}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
