const newsData = YAML.load('files/docs/news.yml');

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toDateString(date) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = date.getMonth();
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;

    return dd + ' ' + month[mm] + ' ' + yyyy;
}

htmlStr = "";
for (let i = 0, len = newsData.length; i < len; i++) {
  newsData[i]["date"] = new Date(newsData[i]["date"]);
}
newsData.sort(function(a,b){return b["date"] - a["date"]});

area = document.getElementById("news");
len = Math.min(5, newsData.length);
for (let i = 0; i < len; i++) {
  item = newsData[i];
  htmlStr += `
  <div class="row">
    <div class="menu">
        <div class="row">
        <div class="col-xs-12 col-sm-7 col-md-8 col-sm-offset-1">
            <h4 class="menu-title">${item["headline"]}</h4>`
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
area.innerHTML = htmlStr;
  