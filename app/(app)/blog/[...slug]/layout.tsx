export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex relative flex-auto justify-center mx-auto w-full lg:px-6 lg:max-w-6xl">{children}</div>
    </div>
  )
}
