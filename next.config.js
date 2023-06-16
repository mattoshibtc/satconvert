/** @type {import('next').NextConfig} */

const repo = 'satconvert'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const withPWA = require('next-pwa')({
  dest: 'public'
});

const nextConfig = withPWA({
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath
})

module.exports = nextConfig
