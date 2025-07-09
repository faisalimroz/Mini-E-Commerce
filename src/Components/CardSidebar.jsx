import React, { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const CartSidebar = ({ isOpen, onClose, items, setItems }) => {
    const [showCheckout, setShowCheckout] = useState(false);
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleQuantityChange = (id, delta) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        ).filter(item => item.quantity > 0)); 
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const handleCloseModal = () => {
        setShowCheckout(false);
    };

    const handleOrderSubmit = () => {
        setItems([]); 
    };

    return (
        <>
        <div className={`z-50 fixed top-0 right-0 h-full w-full md:w-96 bg-gray-800 bg-opacity-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full w-full bg-white shadow-2xl flex flex-col">
               
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <CloseIcon />
                    </button>
                </div>
                
                <div className="flex-grow p-4 overflow-y-auto">
                    {items.length === 0 ? <p className="text-gray-500">Your cart is empty.</p> : items.map(item => (
                        <div key={item.id} className="flex items-center justify-between mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover mr-4" />
                            <div className="flex-grow">
                                <h3 className="font-semibold text-gray-700">{item.name}</h3>
                                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center border rounded-md">
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                            </div>
                        </div>
                    ))}
                </div>
           
                <div className="p-4 border-t">
                    <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300" disabled={items.length === 0} onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        <CheckoutModal isOpen={showCheckout} onClose={handleCloseModal} onSubmit={handleOrderSubmit} />
        </>
    );
};

export default CartSidebar;