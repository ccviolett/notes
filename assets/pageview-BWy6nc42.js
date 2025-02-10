import{_ as t}from"./app-BuuBfveF.js";var a={serverURL:"https://waline-comment.vuejs.press"};const s=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-BuuBfveF.js").then(r=>r.af),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{s as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
