import AppNavbar from "./app-navbar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppNavbar />
      <div className="py-6 @xl:py-12">{children}</div>
    </>
  )
}
