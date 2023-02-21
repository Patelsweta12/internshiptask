function setLink(querySelector, link) {
  let linkElement = document.querySelector(querySelector);
  let linkName = linkElement.innerHTML;
  linkElement.innerHTML = "";
  let aTag = document.createElement("a");
  aTag.setAttribute("href", link);
  aTag.innerHTML = linkName;
  linkElement.appendChild(aTag);
}

setLink(
  "ul[class='linkclass'] > li:nth-child(1)",
  "https://www.1rivet.com/about-us"
);
setLink(
  "ul[class='linkclass'] > li:nth-child(4)",
  "https://www.1rivet.com/contact-us"
);
setLink(
  "span.right-name",
  "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1660285542.jpg"
);
