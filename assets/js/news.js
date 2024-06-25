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
    console.log(area);
    if (area.classList.contains('full')) {
        len = data.length;
    } else {
        len = Math.min(5, data.length);
    }
    for (let i = 0; i < len; i++) {
      item = data[i];
      htmlStr += `
      <div class="row">
        <div class="menu">
            <div class="row">
            <div class="col-xs-10 col-sm-8 col-xs-offset-1">
                <h4 class="menu-title font-serif">${item["headline"]}</h4>
                <div class="menu-detail" style="text-transform: none">${item["description"]}</div>
            </div>
            <div class="col-xs-10 col-sm-2 col-xs-offset-1 col-sm-offset-0 menu-price-detail">
                <h4 class="menu-price" style="font-size:16px">${toDateString(item["date"])}</h4>
            </div>
            <div class="col-xs-10 col-sm-8 col-xs-offset-1">
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
      htmlStr += `</section>`;
    }
    area.innerHTML = htmlStr;
  });
  