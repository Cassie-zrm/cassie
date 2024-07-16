import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cassie-zrm",
  description: "cassie Site",
  outDir: 'docs',
  base: '/cassie/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img.gif',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'demo', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '简介', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cassie-zrm/cassie' }
    ]
  }
})
