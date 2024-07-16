import { build } from 'velite'

/** @type {import('next').NextConfig} */
export default {
    experimental: {
        optimizePackageImports: ['shiki']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com'
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc'
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'www.gravatar.com'
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            }
        ]
    },
    webpack: (config) => {
        config.plugins.push(new VeliteWebpackPlugin())
        return config
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
        compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
            if (VeliteWebpackPlugin.started) return
            VeliteWebpackPlugin.started = true
            const dev = compiler.options.mode === 'development'
            this.options.watch = this.options.watch ?? dev
            this.options.clean = this.options.clean ?? !dev
            await build(this.options) // start velite
        })
    }
}
