import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-green-600 font-medium">₹{product.price}</p>
      <p className="text-sm text-gray-500">{product.brand} | {product.category}</p>
    </div>
  );
};

export default ProductCard;
