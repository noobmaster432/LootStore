/* eslint-disable react/prop-types */
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = ({ addToCart }) => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
