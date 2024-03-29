function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick)
   function onClick() {
      if (document.querySelector('#searchField').value.toLowerCase() == '') {
            document.querySelectorAll('table tbody tr').forEach(row => {
               row.classList.remove('select')
         })
         return
      }
      document.querySelectorAll('table tbody tr').forEach(row => {
         match = false
         row.querySelectorAll('td').forEach(cell => {
            if (cell.textContent.includes(document.querySelector('#searchField').value)) {
               match = true
               return
            }
         })
         if (!match && row.textContent.includes(document.querySelector('#searchField').value)) {
            match = true
         }
         if (match) {
            row.classList.add('select')
         } else {
            row.classList.remove('select')
         }
      })
   }
}