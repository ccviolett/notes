import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import encrypt from "./encrypt.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "CCViolett",
    url: "https://ccviolett.github.io",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "logo.png",

  repo: "ccviolett/notes",

  docsDir: "docs",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // encrypt
  encrypt,

  footer: "默认页脚",

  displayFooter: true,

  blog: {
    name: "罗潇阳",
    avatar: "logo.png",
    description: "一个全栈开发者",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/25734964",
      GitHub: "https://github.com/ccviolett",
      Zhihu: "https://www.zhihu.com/people/41-3-26-70-90",
      
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    comment: {
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    components: {
      // 你想使用的组件
      components: [ 
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,

      // install chart.js before enabling it
      chart: true,

      codetabs: true,

      // insert component easily
      component: true,

      demo: true,

      // install echarts before enabling it
      echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      flowchart: true,

      // gfm requires mathjax-full to provide tex support
      gfm: true,

      imgLazyload: true,
      imgMark: true,
      imgSize: true,

      include: true,

      // install katex before enabling it
      katex: true,

      // install mathjax-full before enabling it
      mathjax: true,

      mark: true,

      // install mermaid before enabling it
      mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      spoiler: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
