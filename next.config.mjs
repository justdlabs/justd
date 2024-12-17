
const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    const { build } = await import('velite')
    await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
export default {
    experimental: {
        optimizePackageImports: ["shiki"]
    },
    async headers() {
        return [
            {
                source: "/_next/static/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type" },
                ],
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/docs/1.x/:path*",
                destination: "https://1x.getjustd.com/docs/1.x/:path*",
            },
            {
                source: "/_next/static/:path*",
                destination: "https://1x.getjustd.com/_next/static/:path*",
            },
        ];
    },
}
