# dev
- `npm run dev` vite dev server
- `npm run preview` build and serve the production output locally
- `npm run deploy` build and `wrangler deploy`

posts live in `content/posts/<id>.mdx` and need an `export const metadata = {...}` block.
`plugins/posts.js` reads that metadata into the post list and generates `/rss.xml` at build.

# links
- [vite](https://vite.dev/guide/)
- [cloudflare vite plugin](https://developers.cloudflare.com/workers/vite-plugin/)
- [mdx](https://mdxjs.com/packages/rollup/)
- [icons](https://lucide.dev/icons/)
- [components](https://ui.shadcn.com/docs/components/accordion)
- [tailwind](https://nerdcave.com/tailwind-cheat-sheet)

# performance tests
- https://tools.pingdom.com/
- https://lighthouse-metrics.com/lighthouse (requires changing VPN to do multiple tests)
- https://www.debugbear.com/


# TODO

- blog
    - stargazer
    - map dependency (d3, maplibre)
        - location generation
        - memory leak
    - terminal
    - standee mothership
