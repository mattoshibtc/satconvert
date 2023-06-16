import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sats converter',
  description: 'Converts sats to fiat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/satconvert/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
