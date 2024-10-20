import React from 'react';
import Item from './Item';

const SmartVillage = () => {
  const items = [
    {
      image: 'https://example.com/crop1.jpg',
      title: 'Organic Wheat',
      description: 'High-quality organic wheat sourced from local farms.',
      price: 1200,
    },
    {
      image: 'https://example.com/tool1.jpg',
      title: 'Tractor',
      description: 'A powerful tractor for efficient farming operations.',
      price: 500000,
    },
  ];

  const handleItemClick = (title) => {
    alert(`Learn more about ${title}`);
  };

  return (
    <div className="smart-village-page">
      <h1>Smart Village Agriculture</h1>
      <div className="item-list">
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            onClick={() => handleItemClick(item.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default SmartVillage;
