/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['picsum.photos'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
