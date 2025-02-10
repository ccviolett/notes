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
  ],
});
