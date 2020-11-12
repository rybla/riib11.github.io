/*
center things inside <p>s:
- <table>
- <img>
*/

const centerp_tagNames = ["IMG"];

(() => {
  let ps = document.getElementsByTagName("p");
  for (let i = 0; i < ps.length; i++) {
    let p = ps[i];
    for (let j = 0; j < p.children.length; j++) {
      let child = p.children[j];
      if (centerp_tagNames.includes(child.tagName)) {
        p.classList.add("centerp");
      }
    }
  }
})();
