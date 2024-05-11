/** @type {import('next').NextConfig} */
const NEXT_CONFIG = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		runtime: "edge", // 'node.js' (default) | experimental-edge
	},
	async redirects() {
		return [
			{
				source: "/api/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*`,
				permanent: true,
			},
		];
	},
	skipTrailingSlashRedirect: true,
};

export default NEXT_CONFIG;
