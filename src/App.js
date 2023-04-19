import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BookList from './BookList';
import AddBook from './AddBook'
import initailbooks from './data/books';
import { useState } from 'react';

function App() {
  const [books,setBooks]=useState(initailbooks)
  // console.log(books)
  
  return (
<>
<Header />
<BookList books={books} />
<AddBook />
</>
  );
}
/*
components
JSX
Props
State
events
Hooks-> useState/useEffect, useRef, ....
Context
SateManagement/ complex State
React Router
Advanced Hooks
Class Components
---------------------
Virtual DOM
How Components Render

90%
Hosting

*/


export default App;
