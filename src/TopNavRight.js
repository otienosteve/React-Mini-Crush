import React from 'react'

function TopNavRight() {
  return (
    <div className="topnav-right">
        <form class="search" id="search">
                <input type="text" name="searchname" id="searchname" placeholder="Search by the Book Title"/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
    </div>
  )
}

export default TopNavRight