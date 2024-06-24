const newsData = fetch("files/docs/news.json").then(response => {return response.json();})

const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Satu"];

function toDateString(date) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    let ww = date.getDay();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return weekday[ww] + ' ' + dd + '/' + mm + '/' + yyyy;
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
                <h4 class="menu-title">${item["headline"]}</h4>
                <div class="menu-detail" style="text-transform: none">${item["description"]}</div>
            </div>
            <div class="col-xs-10 col-sm-2 col-xs-offset-1 col-sm-offset-0 menu-price-detail">
                <h4 class="menu-price font-serif">${toDateString(item["date"])}</h4>
            </div>
            </div>
        </div>
      </div>
      `;
      htmlStr += `</section>`;
    }
    area.innerHTML = htmlStr;
  });
  