import React,{useState} from 'react'

function BookItem({cover, price,title,quantity,sold,subtitle,published,publisher,author, description}) {
    const [toggle,setToggle]=useState(false)
    const toggleDescription=()=>{
        setToggle(!toggle)
    }
  return (
    <div className='card'>
        <img src={cover} alt="" />
        <div className="container">
            <p>{title}</p>
            <p>Price: {price}</p>
            <p>Available Copies {quantity-sold}</p>
            <button onClick={toggleDescription}>{toggle?'show Less':'show More'}</button>
            {toggle?(<details>
                <summary>
                    {author}
                    {description}
                    {published}
                    {publisher}
                </summary>
            </details>):null}
        </div>
        <button id='buybook'>Buy Book</button>

    </div>
  )
}

export default BookItem