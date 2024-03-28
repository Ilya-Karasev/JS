function addItem() {
    text = document.getElementById("newItemText").value;
    value = document.getElementById("newItemValue").value
    option = document.createElement("option")
    option.text = text
    option.value = value
    var menu = document.getElementById("menu");
    menu.add(option)
    Array.from(menu.options).sort(function (a, b) {
        return a.value.localeCompare(b.value)
    }).forEach(function (elem) {
        menu.add(elem)
    })
}