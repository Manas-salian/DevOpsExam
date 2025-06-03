import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Easy Github Docs",
  description: "Learn Git",

  // 👇 Move this here (top-level)
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Writup', link: '/sheet' },
      { text: 'UseThis', link: '/ShortCuts' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'Writup', link: '/sheet' },
          { text: 'UseThis', link: '/ShortCuts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
