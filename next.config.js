/** @type {import("next").NextConfig} */
module.exports = {
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    domains: [
      'images.unsplash.com',
      "images.pexels.com",
      "res.cloudinary.com"
    ]
  },
}