const isDev = process.argv.indexOf("dev") !== -1
const isBuild = process.argv.indexOf("build") !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1"
  const { build } = await import("velite")
  await build({ watch: isDev, clean: !isDev })
}

/** @type {import("next").NextConfig} */
export default {
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ["shiki"],
  },

  async rewrites() {
    return [
      {
        source: "/docs/1.x/:path*",
        destination: "https://1x.getjustd.com/docs/1.x/:path*",
      },

      {
        source: "/_next/:path*",
        destination: "https://1x.getjustd.com/_next/:path*",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/d/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/docs/2.x/getting-started/installation",
        permanent: false,
      },
      {
        source: "/components",
        destination: "/docs/2.x/components/buttons/button",
        permanent: false,
      },
      {
        source: "/docs/components/layouts/aside",
        destination: "/docs/2.x/components/layouts/sidebar",
        permanent: false,
      },
      {
        source: "/d/accordion",
        destination: "/docs/2.x/components/navigation/disclosure-group",
        permanent: false,
      },
      {
        source: "/accordion",
        destination: "/docs/2.x/components/navigation/disclosure-group",
        permanent: false,
      },
      {
        source: "/docs/components/surfaces/chart",
        destination: "/docs/2.x/components/charts/setup",
        permanent: true,
      },
      {
        source: "/aside",
        destination: "/docs/2.x/components/layouts/sidebar",
        permanent: false,
      },
      {
        source: "/design-system",
        destination: "/docs/2.x/getting-started/installation",
        permanent: false,
      },
      {
        source: "/docs/components/collections/accordion",
        destination: "/docs/2.x/components/navigation/disclosure-group",
        permanent: true,
      },
      {
        source: "/docs/components/controls/command",
        destination: "/docs/2.x/components/controls/command-menu",
        permanent: false,
      },
      {
        source: "/docs/components/forms/select",
        destination: "/docs/2.x/components/pickers/select",
        permanent: false,
      },
      {
        source: "/docs/components/forms/select",
        destination: "/docs/2.x/components/pickers/select",
        permanent: false,
      },
      {
        source: "/docs/components/statuses/toaster",
        destination: "/docs/2.x/components/statuses/toast",
        permanent: true,
      },
      {
        source: "/docs/components/collections/carousel",
        destination: "/docs/2.x/components/media/carousel",
        permanent: true,
      },
      {
        source: "/docs/components/forms/choicebox",
        destination: "/docs/2.x/components/collections/choicebox",
        permanent: true,
      },
      {
        source: "/docs/components/forms/multiple-select",
        destination: "/docs/2.x/components/pickers/multiple-select",
        permanent: false,
      },
    ]
  },
}
