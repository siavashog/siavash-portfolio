import './globals.css'
import {Inter} from 'next/font/google'
import Head from "next/head";
import Fav from '@/app/favicon.ico'
const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Siavash portfolio ',
    description: 'Siavash maghsoudi',
    icons: {
    icon: {
      url: "/public/favicon.ico",
      type: "image/ico",
    },
    shortcut: { url: "/favicon.ico", type: "ico" },
  },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <link rel="icon"  href='/public/favicon.ico' sizes='64*64'/>

        {children}

        </body>
        </html>
    )
}
