'use client'

import { Breadcrumb, Breadcrumbs } from '@/components/ui'

export default function BreadcrumbsDemo() {
    return (
        <Breadcrumbs onAction={() => {}}>
            <Breadcrumb href='/'>Home</Breadcrumb>
            <Breadcrumb href='/docs'>Docs</Breadcrumb>
            <Breadcrumb href='/docs/components'>Components</Breadcrumb>
            <Breadcrumb href='/docs/components/navigation'>Navigations</Breadcrumb>
            <Breadcrumb>Breadcrumbs</Breadcrumb>
        </Breadcrumbs>
    )
}
