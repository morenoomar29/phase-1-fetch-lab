function fetchBooks() { 
  return fetch('https://anapioficeandfire.com/api/books')
.then((resp) => resp.json())
.then((json) => renderBooks(json))

}

//.then((json) => renderBooks(json))



/*
function fetchBooks() { 
  // To pass the tests, don't forget to return your fetch!
  
  .then((resp) => resp.json)
  //.then((json) => return.json)
  return resp.json()
}
fetchBooks()
//.then((json) => renderBooks())


/*
fetch('https://anapioficeandfire.com/api/books')
.then((resp) => resp.json()) 
function fetchBooks(resp) {
  return resp.json()
  // To pass the tests, don't forget to return your fetch!
  
}
*/




function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
