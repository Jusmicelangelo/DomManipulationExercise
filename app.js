const idContainer = document.getElementById("container");
// idContainer.innerText = "Hello"
const idContainerQ = document.querySelector("#container");
const allSecond = document.querySelectorAll(".second");
const specificThird = document.querySelector("ol .third");
let footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main")
footer.remove()
let newLi = document.createElement("li")
newLi.innerText = "four"
let ul = document.querySelector("ul")
ul.append(newLi)
let listItems = document.querySelectorAll("ol li")
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = "green";
}
console.log(idContainer)
console.log(idContainerQ)
console.log(allSecond)
console.log(specificThird)
console.log(footer)
console.log(newLi)
console.log(ul)
console.log(listItems)
