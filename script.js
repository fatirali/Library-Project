const myLibrary = [];

bookCounter = 0;

function Book(author, title, pages, read) {
  // the constructor..
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.read=read;
  this.id = ++bookCounter;

}



function displayBooks(myLibrary) {
  const bookList = document.getElementById('book-list')
  bookList.innerHTML = '';

  myLibrary.forEach(item => {
    const row = document.createElement('tr')

    row.setAttribute('data-book-id', item.id)

    const authorCell = document.createElement('td')
    authorCell.textContent = item.author;
    row.appendChild(authorCell);

    const titleCell = document.createElement('td')
    titleCell.textContent = item.title;
    row.appendChild(titleCell);

    const pagesCell = document.createElement('td')
    pagesCell.textContent = item.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement('td')
    readCell.textContent = item.read;
    row.appendChild(readCell);

    const readStatus = document.createElement('button')
    readStatus.textContent = 'Change Read Status'
    readStatus.addEventListener('click', function() {  
        //if Read is equal to true, then turn it false
        // if Read is equal to false, then turn it true
        item.read = !item.read
        readCell.textContent = item.read;
    })
    row.append(readStatus);

    const removeButton = document.createElement('button')
    removeButton.textContent = "Remove"
    removeButton.addEventListener('click', function(){
        const index = myLibrary.findIndex(book => book.id === item.id);
        myLibrary.splice(index,1);
        displayBooks(myLibrary);
    })
    row.appendChild(removeButton);
    bookList.appendChild(row);

  })
}


function addBookToLibrary() {
    var author = document.querySelector(".author").value;
    var title = document.querySelector(".title").value;
    var pages = document.querySelector(".pages").value;

    var read = document.querySelector(".read-status").checked;

    var book = new Book(author,title, pages, read)
    myLibrary.push(book);
    console.log(myLibrary);
    displayBooks(myLibrary);
}

const newButton= document.querySelector(".new")
const addButton = document.querySelector(".add");

newButton.addEventListener("click", () => {
  show_form.showModal();
})

// newButton.addEventListener("click", (event) => {
//   event.preventDefault();
// })

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  show_form.close(addBookToLibrary());
});








// Call this function whenever you update your library array
// For example, after adding a new book:
// myLibrary.push(newBook);
// displayBooks(myLibrary);

// Add table to the document




