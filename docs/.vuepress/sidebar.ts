import { sidebar } from "vuepress-theme-hope";

function clink(text, icon, prefix) : { 
  text, icon, prefix, collapsible, children
} {
  return {
    text, icon, prefix,
    collapsible: true,
    children: "structure"
  }
}

export default sidebar({
  "/": [
    "",
    {
      text: "我的 Wiki",
      icon: "laptop-code",
      prefix: "wiki/",
      link: "wiki/",
      children: "structure",
    },
    "intro",
    "slides",
    "links",
  ],
  "/posts/": "structure",
  "/subjects/": [
    clink("数学基础", "book", "FM"),
    clink("控制工程基础", "book", "CE"),
    clink("数控技术", "book", "NC"),
    clink("机械制造技术", "book", "MM"),
    clink("工程测试技术", "book", "ET"),
    clink("互换性原理", "book", "CG"),
    clink("机械设计", "book", "MD"),
    clink("计算机集成制造系统", "book", "CIMS"),
    clink("机器人技术基础", "book", "RT"),
    clink("考研数学", "book", "PEM"),
  ],
  "/personal/": "structure",
});
