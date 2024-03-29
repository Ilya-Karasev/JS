function search() {
   let matches = 0;
   document.querySelectorAll("#towns li").forEach(town => {
       if ((town.textContent.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase())) && (document.getElementById("searchText").value != '')) {
           matches++;
           town.innerHTML = town.textContent.replace(RegExp(document.getElementById("searchText").value, 'i'), match => `<strong>${match}</strong>`);
           town.style.textDecoration = "underline";
       } else {
           town.innerHTML = town.textContent;
           town.style.textDecoration = "";
       }
   })
   document.getElementById("result").textContent = `${matches} matches found`;
}