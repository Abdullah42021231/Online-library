const apiUrl = 'http://localhost:5000/book';

async function addBook() {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author }),
  });

  alert('Book added successfully!');
}

async function getAllBooks() {
  const response = await fetch(apiUrl);
  const books = await response.json();

  const booksList = document.getElementById('books-list');
  booksList.innerHTML = '';

  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`;
    booksList.appendChild(listItem);
  });
}

async function updateBook() {
  const id = document.getElementById('update-id').value;
  const title = document.getElementById('update-title').value;
  const author = document.getElementById('update-author').value;

  await fetch(`${apiUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author }),
  });

  alert('Book updated successfully!');
}

async function deleteBook() {
  const id = document.getElementById('delete-id').value;

  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });

  alert('Book deleted successfully!');
}
