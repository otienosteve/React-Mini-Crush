import React from 'react'
import Link from './Link'
import TopNavRight from './TopNavRight'
function Header() {
  return (
    <div className="topnav"> 
   <Link text='Book App' link='#home'/>
   <Link text='Add Book' link='#bookForm'/>
   <TopNavRight />

    </div>
  )
}

export default Header