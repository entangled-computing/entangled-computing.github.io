const newsData = fetch("files/docs/news.json").then(response => {return response.json();})

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toDateString(date) {
    const today = new Date();
    const yyyy = today.getFullYear();
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

newsData.then(data => {
  htmlStr = "";
  for (let i = 0, len = data.length; i < len; i++) {
    data[i]["date"] = new Date(data[i]["date"]);
  }
  data.sort(function(a,b){return b["date"] - a["date"]});
  return data;
});

newsData.then(data => {
    area = document.getElementById("news");
    if (area.classList.contains('full')) {
        len = data.length;
    } else {
        len = Math.min(5, data.length);
    }
    for (let i = 0; i < len; i++) {
      item = data[i];
      htmlStr += `
      <div class="row news-${Math.floor(i/15)}" style="display:none">
        <div class="menu">
            <div class="row">
            <div class="col-xs-12 col-sm-7 col-sm-offset-1">
                <h4 class="menu-title font-serif">${item["headline"]}</h4>
                <div class="menu-detail" style="text-transform: none">${item["description"]}</div>
            </div>
            <div class="col-xs-12 col-sm-3 menu-price-detail">
                <h4 class="menu-price" style="font-size:16px">${toDateString(item["date"])}</h4>
            </div>
            <div class="col-xs-12 col-sm-7 col-sm-offset-1">
                <div class="menu-price" style="margin-top:10px">
      `;
      links = item["links"];
      color = ["d", "g", "border-d"];
      for (let j = 0, linklen = links.length; j < linklen; j++) {
        let linker = links[j];
        htmlStr += `<a class="btn btn-${color[j%3]} btn-circle mb-sm-10" href="${linker["href"]}" target="_blank"><i class="fa ${linker["icon"]}"></i> ${linker["description"]}</a> `;
      }
      htmlStr += `   
            </div>
            </div>
            </div>
        </div>
      </div>
      `;
    }
    let maxPage = Math.ceil(len/15)-1;
    if (area.classList.contains('full')) {
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
    }
    area.innerHTML = htmlStr;
    document.querySelectorAll('.news-0').forEach(entry => {
      entry.removeAttribute('style', 'display:none');
    })
  });
  