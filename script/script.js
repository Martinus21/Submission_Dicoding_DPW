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

// Best Writers
dataBestWriters.forEach(function(item){
    var dataBestWritersCard = ` <div class="card_bestWriters">
                                    <div class="card_left">
                                        <img src="${item.img}" alt="...">
                                    </div>
                                    <div class="card_middle">
                                        <h4>${item.author}</h4>
                                        <p>${item.description.substr(0, 50)}...</p>
                                    </div>
                                    <div class="card_right">
                                        <button>Go To Profile</button>
                                    </div>
                                </div>
    `
    document.querySelector("#bestWritersCard").insertAdjacentHTML('beforeend',dataBestWritersCard)
})

document.getElementById("activeOpen").click();
function changeTabs(event, categoryTabs) {
    let contentArticle = document.getElementsByClassName("content_articleAllBottom");
    console.log(categoryTabs)
    for (let i=0; i < contentArticle.length; i++) {
      contentArticle[i].style.display = "none";
    }

    let tabsArticle = document.getElementsByClassName("content_articleAllTop_tab_btnTab");
    for (let i = 0; i < tabsArticle.length; i++) {
      tabsArticle[i].className = tabsArticle[i].className.replace("active", "");
    }
  
    document.getElementById(categoryTabs).style.display = "grid";
    event.currentTarget.className += " active";
}