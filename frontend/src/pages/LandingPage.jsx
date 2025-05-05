import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "../components/ProductCart";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; //  Import useNavigate

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to manually navigate

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts(search);
      setProducts(data);
    } catch (err) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [search]);

  // ✅ Handler to reset search and navigate
  const handleResetSearch = () => {
    setSearch("");
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <NavBar />
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Search by name or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-10">
          <p className="text-lg mb-4">No matching items found.</p>
          <button
            onClick={handleResetSearch}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Go to search page again
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
