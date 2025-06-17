
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Premium',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    description: 'Smartphone de última geração com câmera profissional',
    category: 'Eletrônicos'
  },
  {
    id: '2',
    name: 'Notebook Gamer',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    description: 'Notebook para jogos com placa de vídeo dedicada',
    category: 'Eletrônicos'
  },
  {
    id: '3',
    name: 'Fone Bluetooth',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    description: 'Fone de ouvido sem fio com cancelamento de ruído',
    category: 'Acessórios'
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop',
    description: 'Relógio inteligente com monitoramento de saúde',
    category: 'Acessórios'
  },
  {
    id: '5',
    name: 'Câmera Digital',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
    description: 'Câmera profissional para fotografia',
    category: 'Eletrônicos'
  },
  {
    id: '6',
    name: 'Tablet Pro',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    description: 'Tablet para trabalho e entretenimento',
    category: 'Eletrônicos'
  }
];

const categories = ['Todos', 'Eletrônicos', 'Acessórios'];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="transition-all duration-200"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
