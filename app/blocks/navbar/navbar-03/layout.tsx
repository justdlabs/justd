import { AppNavbar } from "../app-navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppNavbar intent="inset">{children}</AppNavbar>
}
