let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", () => {
    alert("dont hack us by right click please")
})

document.addEventListener("keydown", (e) => {
console.log(e.key , e.keyCode)
})
