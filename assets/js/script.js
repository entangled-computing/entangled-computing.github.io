Array.from(document.getElementsByClassName('last-modified')).forEach(element => {
  element.innerHTML= new Date(document.lastModified).toLocaleString('en-US', { month: 'short', year: "numeric"});
});

Array.from(document.getElementsByClassName('this-year')).forEach(element => {
  element.innerHTML= new Date().getFullYear();
});

function toggle(item) {
  id = item.getAttribute("key");
  document.getElementById("bib"+id).classList.toggle("active");
}