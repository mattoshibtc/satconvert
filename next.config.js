/** @type {import('next').NextConfig} */

const repo = 'satconvert'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = nextConfig
