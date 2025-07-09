import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OurClient from '../../Components/OurClient';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://qtech-nu.vercel.app/products');
                console.log(response.data);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
           
                    throw new Error("Data fetched is not an array");
                }

            } catch (e) {
                console.error("Failed to fetch products:", e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); 
    if (loading) {
        return <div className="text-center p-10">Loading products...</div>;
    }

    if (error) {
        return <div className="text-center p-10 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              
                {products.map((product) => (
                    <div key={product._id} className="card  bg-base-100 w-[200px] shadow-md hover:shadow-xl transition-shadow duration-300">
                        <Link to={`/product/${product._id}`}>
                            <figure>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="text-lg  text-black">{product.title}</h2>
                                <h5 className="text-md font-semibold text-black">Price: ${product.price}</h5>
                            </div>
                        </Link>
                        <div className="card-actions justify-center w-full p-4">
                            <Link to={`/products/${product._id}`} className="w-full">
                                <button className="btn bg-gradient-to-r from-blue-500 to-cyan-400 text-white w-full">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <OurClient></OurClient>
        </div>
    );
};

export default AllProducts;