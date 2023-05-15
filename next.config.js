/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/ivandjoh/image/upload/v1684110803/ID_y93mbe.png',
            },
        ],
    },
}

module.exports = nextConfig
