
let organization = [
  { name: "HTML", link: "https://www.w3schools.com/html/default.asp" },
  { name: "CSS", link: "https://www.w3schools.com/css/default.asp" },
  { name: "javascript", link: "https://www.w3schools.com/js/default.asp" },

];
let aside = document.createElement("aside");
console.log(aside);
let nav = document.createElement("nav");
aside.appendChild(nav);




function sideBar(a, d) {
  let nav = document.createElement("nav");
  aside.appendChild(nav);

  let ul = document.createElement("ul");
  nav.appendChild(ul);

  for (const iterator of organization) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let a = document.createElement("a");
    li.appendChild(a);
    a.classList.add("lineRem");
    li.classList.add("text_decor");
    let text = document.createTextNode(iterator.name);

    a.appendChild(text);
    for (const key in iterator) {
      let href = a.setAttribute("href", iterator.link);
    }
  }
}
sideBar(aside, organization);

document.body.append(aside);

