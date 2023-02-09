function addToList() {
    var value = document.getElementById("inputText").value;
    if (value === "") {
        alert("To add an item type its name into the box");
    } else {
        var li = document.createElement("li");
        var textNode = document.createTextNode(value);
        li.appendChild(textNode);
        document.getElementById("list").appendChild(li);
        li.className = "item";
        var close = document.createElement("SPAN");
        var closeNode = document.createTextNode("   X");
        close.appendChild(closeNode);
        li.appendChild(close);
        close.className = "close";
    }
}
document.body.addEventListener("click", function (event) {
    if (event.target.className == "close")
    event.target.parentElement.style.display = "none";
});
document.body.addEventListener("click", function (event) {
    if (event.target.tagName == "LI")event.target.classList.toggle("check");
});