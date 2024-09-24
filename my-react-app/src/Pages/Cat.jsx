import { useParams } from 'react-router-dom';
import frock from '../Images/Fashion/frock.jpg';
import heels from '../Images/Fashion/heels.jpg';
import trousers from '../Images/Fashion/trousers.jpg';
import blouse from '../Images/Fashion/blouse.jpg';
import gardening from '../Images/Home and Garden/gardening.jpg';
import tea from '../Images/Home and Garden/tea.jpg';
import herb from '../Images/Home and Garden/herb.jpg';
import decor from '../Images/Home and Garden/decor.jpg';

const categories = {
  'pet-supplies': [
    { name: 'Pet Food', description: 'Healthy food for pets', imageSrc: 'path/to/pet-food.jpg' },
    { name: 'Pet Toys', description: 'Fun toys for pets', imageSrc: 'path/to/pet-toys.jpg' },
    { name: 'Dog Belt', description: 'Durable and comfortable belts designed for walking and controlling your dog.', imageSrc: 'path/to/dog-belt.jpg' },
  ],
  'home-and-garden': [
    { name: 'Garden Tools', description: 'Tools for home gardening', imageSrc: gardening },
    { name: 'Tea and Infusion', description: 'A variety of teas and herbal infusions for relaxation and wellness.', imageSrc: tea },
    { name: 'Herb And Spices', description: 'A collection of aromatic herbs and spices to enhance flavor and health benefits in cooking.', imageSrc: herb },
    { name: 'Home Decor', description: 'Beautiful home decor items', imageSrc: decor },
  ],
  'fashion': [
    { name: 'Frock', description: 'Stylish and comfortable dresses suitable for various occasions.', imageSrc: frock },
    { name: 'Blouse', description: 'Elegant and versatile tops perfect for casual or formal wear.', imageSrc: blouse },
    { name: 'Trousers', description: 'Comfortable and stylish pants suitable for both casual and formal occasions.', imageSrc: trousers },
    { name: 'Slippers and Heels', description: 'Comfortable slippers for everyday wear and stylish heels for special occasions.', imageSrc: heels },
  ],
};

export default function Cat() {
  const { category } = useParams();
  const items = categories[category] || [];

  if (!items.length) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <p>We couldn't find the category you're looking for. Please try another one.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center capitalize">{category.replace('-', ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {items.map((item) => (
          <div key={item.name} className="p-4 border rounded-md transition duration-300 transform hover:bg-gray-100 hover:shadow-lg hover:scale-105">
            <img src={item.imageSrc} alt={item.name} className="w-full h-75 object-cover" />
            <h2 className="text-xl mt-2 text-center font-bold">{item.name}</h2>
            <p className="text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
