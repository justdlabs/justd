import { build } from 'velite';


/** @type {import('next').NextConfig} */
export default {
  experimental: {
    optimizePackageImports: ["shiki"]
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: false
      },
      {
        source: "/design-system",
        destination: "/docs/getting-started/installation",
        permanent: false
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
        permanent: false
      },
      {
        source: "/docs/components/collections/carousel",
        destination: "/docs/components/media/carousel",
        permanent: false
      },
      {
        source: "/docs/components/forms/choicebox",
        destination: "/docs/components/collections/choicebox",
        permanent: false
      },
      {
        source: "/docs/components/forms/multiple-select",
        destination: "/docs/components/pickers/multiple-select",
        permanent: false
      }
    ]
  }
}

class VeliteWebpackPlugin {
  static started = false

  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options
  }

  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs !!!
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === "development"
      this.options.watch = this.options.watch ?? dev
      this.options.clean = this.options.clean ?? !dev
      await build(this.options) // start velite
    })
  }
}
