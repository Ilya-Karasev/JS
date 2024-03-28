function solve() {
  if (document.getElementById("naming-convention").value == "Pascal Case") {
    words = document.getElementById("text").value.split(" ")
    pascal_case = ""
    for (word of words) {
      pascal_case += word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
    document.getElementById("result").textContent = pascal_case
  } else if (document.getElementById("naming-convention").value == "Camel Case") {
    words = document.getElementById("text").value.split(" ")
    camel_case = ""
    camel_case += words[0].toLowerCase()
    for (let i = 1; i < words.length; i++) {
      camel_case += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }
    document.getElementById("result").textContent = camel_case
  } else {
    document.getElementById("result").textContent = "Error!"
  }
}