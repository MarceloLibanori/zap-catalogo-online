
import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import ProductCatalog from '@/components/ProductCatalog';
import Cart from '@/components/Cart';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Catálogo Online
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra nossos produtos incríveis e faça seu pedido via WhatsApp
            </p>
          </div>
          <ProductCatalog />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
