let twodata = localStorage.getItem("alldata");
let allmelumat=JSON.parse(twodata);
allmelumat.map(element=>{
    document.querySelector(".allcard").innerHTML+=
    `<div class="card">
    <div class="icon1"><i class="fa-solid fa-crown"></i></div>
    <div class="icon2"><i class="fa-regular fa-heart"></i></div>
    <img src="${element.image}">
    <p>${element.price} ${"$"}</p>
    <span>${element.title.slice(0,8)} ${"..."}</span>
    <span class="category">${element.category}</span>
    </div>`
})

