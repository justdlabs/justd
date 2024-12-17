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
        source: '/docs/1.x/:slug*',
        destination: 'https://1x.getjustd.com/docs/1.x/:slug*',
      },
    ];
  },
}
