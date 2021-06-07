var dataTech = data.filter(function(e){
    return e.category === "Tech"
})
var dataCulture = data.filter(function(e){
    return e.category === "Culture"
})
var dataEntertain = data.filter(function(e){
    return e.category === "Entertainment"
})

data.forEach(function(item){
    console.log(item.img, "jdksaljdksajkldasjkldjsakl")
    var dataCard =`<div class="card">
                        <img class="cardImg" src="${item.img}" alt="...">
                        <div class="cardBody">
                            <h4 class="cardBody_h4">${item.judul}</h4>
                            <p class="cardBody_author">Author : ${item.author}</p>
                            <p class="cardBody_description">${item.description.substr(0, 100)}...</p>
                        </div>
                    </div>`
    document.querySelector("#All").insertAdjacentHTML('afterbegin',dataCard)
});
dataCulture.forEach(function(item){
    var dataCard =`<div class="card">
                        <img class="cardImg" src="${item.img}" alt="...">
                        <div class="cardBody">
                            <h4 class="cardBody_h4">${item.judul}</h4>
                            <p class="cardBody_author">Author : ${item.author}</p>
                            <p class="cardBody_description">${item.description.substr(0, 100)}...</p>
                        </div>
                    </div>`
    document.querySelector("#Culture").insertAdjacentHTML('afterbegin',dataCard)
});
dataTech.forEach(function(item){
    var dataCard =`<div class="card">
                        <img class="cardImg" src="${item.img}" alt="...">
                        <div class="cardBody">
                            <h4 class="cardBody_h4">${item.judul}</h4>
                            <p class="cardBody_author">Author : ${item.author}</p>
                            <p class="cardBody_description">${item.description.substr(0, 100)}...</p>
                        </div>
                    </div>`
    document.querySelector("#Tech").insertAdjacentHTML('afterbegin',dataCard)
});
dataEntertain.forEach(function(item){
    var dataCard =`<div class="card">
                        <img class="cardImg" src="${item.img}" alt="...">
                        <div class="cardBody">
                            <h4 class="cardBody_h4">${item.judul}</h4>
                            <p class="cardBody_author">Author : ${item.author}</p>
                            <p class="cardBody_description">${item.description.substr(0, 100)}...</p>
                        </div>
                    </div>`
    document.querySelector("#Entertainment").insertAdjacentHTML('afterbegin',dataCard)
});

document.getElementById("activeOpen").click();
function changeTabs(event, category) {
    let contentArticle = document.getElementsByClassName("content_articleAllBottom");
    for (let i=0; i < contentArticle.length; i++) {
      contentArticle[i].style.display = "none";
    }

    let tabsArticle = document.getElementsByClassName("content_articleAllTop_tab_btnTab");
    for (i = 0; i < tabsArticle.length; i++) {
      tabsArticle[i].className = tabsArticle[i].className.replace(" active", "");
    }
  
    document.getElementById(category).style.display = "grid";
    event.currentTarget.className += " active";
}