const isDev = process.argv.indexOf("dev") !== -1
const isBuild = process.argv.indexOf("build") !== -1
const versionOneUrl = process.env.NEXT_PUBLIC_APP_V1_URL
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
        source: "/docs/1.x/:slug*",
        destination: `${versionOneUrl}/docs/1.x/:slug*`,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/docs/:slug*",
        has: [
          {
            type: "header",
            key: "x-no-redirect",
            value: "true",
          },
        ],
        destination: "/docs/2.x/:slug*",
        permanent: false,
      },
    ]
  },
}
