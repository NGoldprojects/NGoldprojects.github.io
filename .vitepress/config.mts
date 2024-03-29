import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NG Old projects",
  description: "My Old projects",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'HTeam', link: '/about/hteam' },
          { text: 'SB', link: '/about/sb' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/NGoldprojects/repositories' }
    ]
  }
})
