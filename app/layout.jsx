import { Analytics } from '@vercel/analytics/react';
import { Inter, Poppins } from 'next/font/google'
import "../styles/globals.css"

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ["latin"], weight:["100","200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  title: 'React Animations',
  description: 'React Animations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
