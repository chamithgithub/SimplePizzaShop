// src/components/ItemList.jsx
import React from 'react';

const ItemList = () => {
  const items = [
    {
      name: 'Item 1',
      description: 'Item 1 description',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    },
    {
      name: 'Item 2',
      description: 'Item 2 description',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    },
    {
      name: 'Item 3',
      description: 'Item 3 description',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    },
    {
      name: 'Item 4',
      description: 'Item 4 description',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    },
  ];

  return (
    <div className='itemList p-5'>
      <h1 className='text-3xl font-plex-mono-bold'>Item List</h1>
      <div className="itemMenu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {items.map((item, index) => (
          <div className="item bg-white p-5 rounded shadow-md" key={index}>
            <h3 className="text-xl font-plex-mono">{item.name}</h3>
            <p className="text-gray-700">{item.description}</p>
            <img
              className="mt-2 rounded"
              src={item.imageUrl}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
