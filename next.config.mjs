import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          theme: "one-dark-pro",
          // https://rehype-pretty.pages.dev/#options
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "md"],
  reactStrictMode: false,

  // NOTE: you had `images` twice; the second overwrites the first.
  images: {
    qualities: [25, 50, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
  },

  async rewrites() {
    return [{ source: "/", destination: "/index.html" }];
  },

  async headers() {
    return [
      {
        source: "/rss.xml",
        headers: [{ key: "content-type", value: "text/xml" }],
      },
    ];
  },
};

export default withMDX(nextConfig);
