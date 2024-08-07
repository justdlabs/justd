'use client'

import { IconsList } from '@/app/(app)/icons/partials/icons-list'
import { Code } from '@/components/docs/rehype/code'
import { InstallCommand } from '@/components/install-command'
import { Container, Snippet } from 'ui'

export function Portal() {
  return (
    <div className="py-16">
      <Container>
        <div className="flex items-center justify-between">
          <InstallCommand className="min-w-80" text="" isInstall isManual items={['justd-icons']} />
        </div>
        <IconsList />
      </Container>
    </div>
  )
}
