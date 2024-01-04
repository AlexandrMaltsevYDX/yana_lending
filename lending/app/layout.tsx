import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/reset/reset.scss'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'lending',
  description: 'lending',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
