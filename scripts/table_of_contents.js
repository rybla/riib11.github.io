var tagNames_headers = ["H1", "H2", "H3", "H4", "H5", "H6"];

var table_of_contents_elem = document.getElementsByClassName("table-of-contents")[0];
var table_of_contents_content_elem = document.getElementsByClassName("table-of-contents-content")[0]

function header_level(elem) {
  return tagNames_headers.indexOf(elem.tagName);
}

function make_table_of_contents() {
  let elems = null;
  if (document.getElementsByClassName("post-content").length > 0) {
    elems = document.getElementsByClassName("post-content")[0].children;
  } else
    if (document.getElementsByClassName("page-content").length > 0) {
      elems = document.getElementsByClassName("page-content")[0].children;
    }

  let l = 0; // level
  let hls = [];
  for (let elem_i = 0; elem_i < elems.length; elem_i++) {
    let elem = elems[elem_i];
    let hl = header_level(elem);
    if (hl >= 0) hls.push([hl, elem.innerText, elem]);
  }


  let toc_ol = document.createElement("ol");
  table_of_contents_content_elem.appendChild(toc_ol);
  let ols = [toc_ol]; // hl => ol

  let prev_hl = 0;

  for (let i = 0; i < hls.length; i++) {
    let hl = hls[i][0];
    let text = hls[i][1];
    let id = text.split(" ").join("-");
    let elem = hls[i][2];

    // go outer
    if (hl > prev_hl) {
      while (hl > prev_hl) {
        let ol = document.createElement("ol");
        ols[prev_hl].appendChild(ol);
        ols.push(ol);
        prev_hl++;
      }
    } else

      // go inner
      if (hl < prev_hl) {
        while (hl < prev_hl) {
          ols.pop(); // remove outermost ol
          prev_hl--;
        }
      }

    // add li to the appropriate ol
    let li = document.createElement("li");
    ols[hl].appendChild(li);
    let a = document.createElement("a");
    li.appendChild(a);
    // a.classList.add("un-a");
    a.classList.add("table-of-contents-item");
    a.href = "#" + id;
    a.innerText = text;
    elem.id = id;
  }

}

make_table_of_contents();

/*
var table_of_contents_toggle_elem = document.getElementsByClassName("table-of-contents-toggle")[0];
const table_of_contents_text_collapse = "collapse table of contents";
const table_of_contents_text_expand = "expand table of contents";
const table_of_contents_class_collapsed = "collapsed-vertical";

table_of_contents_toggle_elem.innerText = "collapse table of contents";
table_of_contents_toggle_elem.addEventListener("click", (event) => {
  if (table_of_contents_elem.classList.contains(table_of_contents_class_collapsed)) {
    table_of_contents_elem.classList.remove(table_of_contents_class_collapsed);
    table_of_contents_toggle_elem.innerText = table_of_contents_text_collapse;
  } else {
    table_of_contents_elem.classList.add(table_of_contents_class_collapsed);
    table_of_contents_toggle_elem.innerText = table_of_contents_text_expand;
  }
})
*/
