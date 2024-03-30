import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NG Old projects",
  description: "My Old projects",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects', 
        items: [
          { text: 'HTeam', link: '/about/hteam' },
          { text: 'SB', link: '/about/sb' }
        ]
      }
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
    ],

    footer: {
      copyright: 'Copyright © 2024 <a href="https://github.com/TheFunnyDay">Nikita Golubev / TheFunnyDay</a>'
    }
  }
})
