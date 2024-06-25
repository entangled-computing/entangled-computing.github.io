const piData = fetch("files/docs/pi.json").then(response => {return response.json();})

piData.then(data => {
  area = document.getElementById("pi");
  htmlStr = `
  <div class="container">
    <div class="row" style="margin-bottom:10px">
      <div class="col-xs-10 col-sm-8 col-md-4 col-xs-offset-1 col-sm-offset-2 col-md-offset-0 mb-sm-30">
        <img src="${data["image"]}"/>
      </div>
      <div class="col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-0">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="product-title font-alt">${data["name"]}</h2>
          </div>
        </div>
        <div class="row mb-20">
          <div class="col-sm-12">
            <div class="price font-alt"><span class="amount">${data["role"]}</span></div>
          </div>
        </div>
        <div class="row mb-20">
          <div class="col-sm-12">
            <div class="description" style="font-size: 18px;">
              <p>${data["introduction"]}</p>
  `;
  links = data["links"];
  color = ["d", "g", "border-d"];
  for (let i = 0, len = links.length; i < len; i++) {
    let linker = links[i];
    htmlStr += `<a class="btn btn-${color[i%3]} btn-circle mb-sm-10" href="${linker["href"]}" target="_blank"><i class="fa ${linker["icon"]}"></i> ${linker["description"]}</a> `;
  }
  htmlStr += `          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="divider-w">`;
  area.innerHTML = htmlStr;
});

const memberData = fetch("files/docs/members.json").then(response => {return response.json();})

memberData.then(data => {
  area = document.getElementById("members");
  htmlStr = "";
  for (let position in data) {
    htmlStr += `
    <section class="module-extra-small">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <h2 class="module-title font-alt">${position}</h2>
          </div>
        </div>
    `;
    let group = data[position];
    for (let i = 0, len = group.length; i < len; i++) {
      let item = group[i];
      if (i % 4 == 0) {
        htmlStr += `<div class="row flexrow">`;
      }
      if (i % 2 == 0) {
        htmlStr += `<div class="mb-sm-20 wow fadeInUp col-xs-6 col-sm-5 col-md-3 col-sm-offset-1 col-md-offset-0" onclick="wow fadeInUp">`;
      } else {
        htmlStr += `<div class="mb-sm-20 wow fadeInUp col-xs-6 col-sm-5 col-md-3" onclick="wow fadeInUp">`;
      }
      htmlStr += `
        <div class="team-item">
          <div class="team-image"><img src="${item["image"]}"/>
            <div class="team-detail">
              <p class="font-serif">${item["quote"]}</p>
              <div class="team-social">
      `;
      links = item["links"];
      for (let icon in links){
        htmlStr += `<a href="${links[icon]}" target="_blank"><i class="fa ${icon}"></i></a>`;
      }
      htmlStr += `          
              </div>
            </div>
          </div>
          <div class="team-descr font-alt">
            <div class="team-name">${item["name"]}</div>
            <div class="team-role">${item["role"]}</div>
          </div>
        </div>
      </div>
      `;
      if (i == len - 1){
        htmlStr += `</div>`;
      }
      else if (i % 4 == 3) {
        htmlStr += `</div>`;
      }
    }
    htmlStr += `</section>
    <hr class="divider-w">`;
  }
  area.innerHTML = htmlStr;
});

const alumData = fetch("files/docs/alumni.json").then(response => {return response.json();})

alumData.then(data => {
  area = document.getElementById("alum");
  htmlStr = `
  <div class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <h2 class="module-title font-alt">Alumni</h2>
    </div>
  </div>`;
  for (let i = 0, len = data.length; i < len; i++) {
    item = data[i];
    htmlStr += `
    <div class="row">
      <div class="menu">
        <div class="row">
          <div class="col-xs-10 col-sm-5 col-xs-offset-1">
            <h4 class="menu-title font-alt">${item["name"]}</h4>
            <div class="menu-detail font-alt">${item["details"]}</div>
          </div>
          <div class="col-xs-10 col-sm-5 col-xs-offset-1 col-sm-offset-0 menu-price-detail">
            <h4 class="menu-price font-serif">${item["whereabouts"]}</h4>
          </div>
        </div>
      </div>
    </div>
    `;
    htmlStr += `</section>`;
  }
  area.innerHTML = htmlStr;
});
