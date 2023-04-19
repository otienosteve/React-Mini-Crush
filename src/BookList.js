import React from 'react'
import BookItem from './BookItem'

function BookList({books}) {
   console.log(books)

  return (
    <div
     className='books' id='home'>
       { books.map(book=><BookItem key={book.id} {...book}/>)}
       
        </div>
  )
}

export default BookList