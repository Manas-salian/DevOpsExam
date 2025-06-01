import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevOpsExamCheatSheet",
  description: "Copy Paste Karo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CheatSheet', link: '/sheet' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'CheatSheet', link: '/sheet' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
