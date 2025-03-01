const newsData = YAML.load('files/docs/news.yml');

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toDateString(date) {
    let yyyy = date.getFullYear();
    let mm = date.getMonth();
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;

    return dd + ' ' + month[mm] + ' ' + yyyy;
}

let newsCounter = 0;

function setPage(counter) {
    document.querySelectorAll(`.news-${newsCounter}`).forEach(entry => {
      entry.setAttribute('style', 'display:none');
    })
    document.getElementById(`pagination-${newsCounter}`).classList.toggle("active");
    document.querySelectorAll(`.news-${counter}`).forEach(entry => {
      entry.removeAttribute('style', 'display:none');
    })
    document.getElementById(`pagination-${counter}`).classList.toggle("active");
    newsCounter = counter;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function incPage(maxCounter) {
  document.querySelectorAll(`.news-${newsCounter}`).forEach(entry => {
    entry.setAttribute('style', 'display:none');
  })
  document.getElementById(`pagination-${newsCounter}`).classList.toggle("active");
  newsCounter = Math.min(maxCounter, newsCounter+1)
  document.querySelectorAll(`.news-${newsCounter}`).forEach(entry => {
    entry.removeAttribute('style', 'display:none');
  })
  document.getElementById(`pagination-${newsCounter}`).classList.toggle("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function decPage() {
  document.querySelectorAll(`.news-${newsCounter}`).forEach(entry => {
    entry.setAttribute('style', 'display:none');
  })
  document.getElementById(`pagination-${newsCounter}`).classList.toggle("active");
  newsCounter = Math.max(0, newsCounter-1)
  document.querySelectorAll(`.news-${newsCounter}`).forEach(entry => {
    entry.removeAttribute('style', 'display:none');
  })
  document.getElementById(`pagination-${newsCounter}`).classList.toggle("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

htmlStr = "";
for (let i = 0, len = newsData.length; i < len; i++) {
  newsData[i]["date"] = new Date(newsData[i]["date"]);
}
newsData.sort(function(a,b){return b["date"] - a["date"]});

area = document.getElementById("news");
len = newsData.length;
for (let i = 0; i < len; i++) {
  item = newsData[i];
  htmlStr += `
  <div class="row news-${Math.floor(i/15)}" style="display:none">
    <div class="menu">
        <div class="row mb-10">
  `
  if (!item["image"]) {
    htmlStr += `
        <div class="col-xs-12 col-sm-9 col-md-8 col-md-offset-1">`
  } else {
    htmlStr += `
        <div class="col-xs-6 col-sm-3 col-md-2 col-xs-offset-3 col-sm-offset-0 col-md-offset-1">
            <img src="${item["image"]}" class="mb-sm-30" style="object-fit:cover; object-position: center; border-radius: 1em;"/>
        </div>
        <div class="col-xs-12 col-sm-6">`
  }
  htmlStr += `<h4 class="menu-title">${item["headline"]}</h4>`
  if (item["description"]) {
    htmlStr += `<div class="menu-detail font-serif" style="text-transform: none">${item["description"]}</div>`
  }
  if (item["links"]) {
    htmlStr += `<div class="menu-price mb-0 mt-10">`;
    links = item["links"];
    color = ["d", "g", "border-d"];
    for (let j = 0, linklen = links.length; j < linklen; j++) {
      let linker = links[j];
      htmlStr += `<a class="btn btn-${color[j%3]} btn-circle" href="${linker["href"]}" target="_blank"><i class="fa ${linker["icon"]}"></i> ${linker["description"]}</a> `;
    }
    htmlStr += `</div>`;
  }
  htmlStr += `
        </div>
        <div class="col-xs-12 col-sm-3 col-md-2 menu-price-detail">
            <h4 class="menu-price" style="font-size:16px">${toDateString(item["date"])}</h4>
        </div>
        </div>
    </div>
  </div>
  `;
}
let maxPage = Math.ceil(len/15)-1;
htmlStr += `
<div class="row" style="text-align:center">
<ul class="pagination">
  <li><a target="_self" role="button" onclick="decPage()"><i class="fa fa-angle-left"></i></a></li>
  <li class="active" id="pagination-0" ><a target="_self" role="button" onclick="setPage(0)">1</a></li>`
for (let i = 1; i < maxPage + 1; i++) {
  htmlStr += `<li id="pagination-${i}"><a target="_self" role="button" onclick="setPage(${i})">${i+1}</a></li>`
}
htmlStr += `
  <li><a target="_self" role="button" onclick="incPage(${maxPage})"><i class="fa fa-angle-right"></i></a></li>
</ul>
</div>`
area.innerHTML = htmlStr;
document.querySelectorAll('.news-0').forEach(entry => {
  entry.removeAttribute('style', 'display:none');
})
  
