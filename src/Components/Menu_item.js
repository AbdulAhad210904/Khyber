import React from 'react';

const Carders = ({ name, desc, price, image }) => {
  return (
    <div className="card" style={{ width: '300px', margin: '0 auto',borderColor:'black',borderRadius:'5px',border:'1px solid' }}>
      <div className="image" style={{ position: 'relative' }}>
        <button className="price" style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 255, 255, 0.7)', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
          {price}
        </button>
        <img src={image} alt="Product" style={{ width: '100%', borderRadius: '5px' }} />
      </div>
      <h3 className="title" style={{ textAlign: 'center', marginTop: '10px' }}>{name}</h3>
      <p className="subtitle" style={{ textAlign: 'center', color: '#666' }}>
        {desc}
      </p>
    </div>
  );
}

export default Carders;
