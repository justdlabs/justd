import React from 'react'

import { AppAside } from '@/app/aside/app-aside'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppAside>{children}</AppAside>
}
