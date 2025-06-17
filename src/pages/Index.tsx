
import React from 'react';

const Index = () => {
  console.log('Index component is rendering');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossos produtos incríveis e faça seu pedido via WhatsApp
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700">
            Carregando catálogo de produtos...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
