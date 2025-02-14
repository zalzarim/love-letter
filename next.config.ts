import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',        // Enables static export mode (next export)
  trailingSlash: true,     // Adds trailing slashes to URLs (e.g., /about/ instead of /about)

  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    return config;
  },
};

export default nextConfig;
