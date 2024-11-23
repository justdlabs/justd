const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
export default {
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false
  },
  experimental: {
    optimizePackageImports: ["shiki"]
  },
  async redirects() {
    return [
      {
        source: "/d/:path*",
        destination: "/:path*",
        permanent: true
      },
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: false
      },
      {
        source: "/docs/components/layouts/aside",
        destination: "/docs/components/layouts/sidebar",
        permanent: false
      },
      {
        source: "/d/accordion",
        destination: "/docs/components/navigation/disclosure-group",
        permanent: false
      },
      {
        source: "/accordion",
        destination: "/docs/components/navigation/disclosure-group",
        permanent: false
      },
      {
        source: "/aside",
        destination: "/docs/components/layouts/sidebar",
        permanent: false
      },
      {
        source: "/design-system",
        destination: "/docs/getting-started/installation",
        permanent: false
      },
      {
        source: "/docs/components/collections/accordion",
        destination: "/docs/components/navigation/disclosure-group",
        permanent: true
      },
      {
        source: "/docs/components/controls/command",
        destination: "/docs/components/controls/command-menu",
        permanent: false
      },
      {
        source: "/docs/components/forms/select",
        destination: "/docs/components/pickers/select",
        permanent: false
      },
      {
        source: "/docs/components/forms/select",
        destination: "/docs/components/pickers/select",
        permanent: false
      },
      {
        source: "/docs/components/statuses/toaster",
        destination: "/docs/components/statuses/toast",
        permanent: true
      },
      {
        source: "/docs/components/collections/carousel",
        destination: "/docs/components/media/carousel",
        permanent: true
      },
      {
        source: "/docs/components/forms/choicebox",
        destination: "/docs/components/collections/choicebox",
        permanent: true
      },
      {
        source: "/docs/components/forms/multiple-select",
        destination: "/docs/components/pickers/multiple-select",
        permanent: false
      }
    ]
  }
}
