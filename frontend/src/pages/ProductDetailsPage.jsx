import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../services/productService';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        toast.error('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-96 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <h3 className="text-xl text-green-600 font-semibold">₹{product.price}</h3>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="text-sm text-gray-500 mt-1">{product.brand} | {product.category}</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Search
      </button>
    </div>
  );
};

export default ProductDetailsPage;
