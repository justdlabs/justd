import type { Metadata } from "next"

import { AppNavbar } from "./app-navbar"

export const metadata: Metadata = {
  title: "Basic Navbar"
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppNavbar>{children}</AppNavbar>
}
