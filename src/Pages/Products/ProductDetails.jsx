import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CartSidebar from '../../Components/CardSidebar'; // Correct the path to your CartSidebar component

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id,'fg');
    const [product, setProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://qtech-nu.vercel.app/products/${id}`);
                const data = await response.json();
                console.log(data);
                setProduct(data);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            const existingItem = cartItems.find(item => item.id === product.id);
            if (existingItem) {
                setCartItems(cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ));
            } else {
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
            setIsCartOpen(true);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            <main className="container mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  
                    <div>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full lg:h-[600px] rounded-lg object-cover shadow-lg"
                        />
                    </div>

               
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {product.title}
                        </h1>
                        <p className="text-2xl font-semibold text-blue-600 my-4">
                            ${product.price}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                 
                        <div className="mt-6">
                            <button
                                onClick={handleAddToCart}
                                className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                setItems={setCartItems}
            />
        </div>
    );
};

export default ProductDetails;