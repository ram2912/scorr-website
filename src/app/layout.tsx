import './globals.css'

import { Manrope } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export default function RootLayout({
  children,
}: IProps) {
  return (
    <html lang="en" className={manrope.variable}>
      <head />
      <body>{children}</body>
    </html>
  )
}

interface IProps {
  children: React.ReactNode
}