import React from 'react'
import './ItemList.css'

const ItemList = () => {
  return (
    <div className='itemList'>
     <h1 className='text-3xl pt-5 font-bold' >Item List</h1>
     <div className="itemMenu">
      <div className="item">
        <h3>Item 1</h3>
        <p>Item 1 description</p>
        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="item-1" />

      </div>
      <div className="item">
        <h3>Item 1</h3>
        <p>Item 1 description</p>
        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="item-1" />

      </div>
      <div className="item">
        <h3>Item 1</h3>
        <p>Item 1 description</p>
        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="item-1" />

      </div>
     </div>
      
    </div>
  )
}

export default ItemList
