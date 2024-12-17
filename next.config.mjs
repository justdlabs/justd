
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
    }
}
