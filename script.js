//fetch the api in function//
async function getBooks(bookName) {
    try {
      let response = await fetch(`https://anapioficeandfire.com/api/books?name=${bookName}`);
      let books = await response.json();
      return books;
    } catch (error) {
      //console.log(error);
    }
  }
  //displayBooks function takes a books parameter which is an array of book //
  function displayBooks(books) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    // if you tag will throw the content//
    books.forEach(book => {
      var li = document.createElement("li");
      var title = document.createElement("h2");
      var authors = document.createElement("p");
      var isbn = document.createElement("p");
      var numberOfPages = document.createElement("p");
      var publisher = document.createElement("p");
      var released = document.createElement("p");
      var country = document.createElement("p");
  
      title.innerText = book.name;
      authors.innerText = "Authors: " + book.authors.join(", ");//author in array to using join//
      isbn.innerText = "ISBN: " + book.isbn;
      numberOfPages.innerText = "Number of pages: " + book.numberOfPages;
      publisher.innerText = "Publisher: " + book.publisher;
      released.innerText = "Release date: " + book.released;
      country.innerText = "Country: " + book.country;
  
      li.appendChild(title);
      li.appendChild(authors);
      li.appendChild(isbn);
      li.appendChild(numberOfPages);
      li.appendChild(publisher);
      li.appendChild(released);
      li.appendChild(country);
      bookList.appendChild(li);
    });
  }
  //to access particular event//
  async function main() {
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", async () => {
      let bookName = document.getElementById("bookName").value;
      let books = await getBooks(bookName);
      displayBooks(books);
    });
  }
  
  main();//call the function//
  