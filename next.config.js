/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "i.pinimg.com"
            },
            {
                protocol: 'https',
                hostname: "shikimori.one"
            }
        ],
    }
}

module.exports = nextConfig
