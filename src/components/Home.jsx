import ImageCarousel from './common/ImageCarousel';
import { carouselImages } from '../data/carouselData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Image Carousel */}
      <div className="w-full">
        <ImageCarousel images={carouselImages} />
      </div>



      {/* Categories Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Mothers Day', image: '/mothers-day.jpeg', url: '/mothers-day' },
            { name: 'Flowers', image: '/flower-1.webp', url: '/flowers' },
            { name: 'Cakes', image: '/cake.jpeg', url: '/cakes' },
            { name: 'Combos', image: '/combo.jpeg', url: '/combos' },
            { name: 'Plants', image: '/plant.avif', url: '/plants' },
            { name: 'Personalised', image: '/gift.webp', url: '/personalised' },
          ].map((category, index) => (
            <Link to={category.url} key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
              <div className="h-40 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Shop By Occasions & Relations */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Shop By Occasions & Relations</h2>
          <p className="text-gray-600 mt-2">Surprise Your Loved Ones</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-6xl mx-auto px-2 md:px-4">
          {[
            { name: 'Birthday Gifts', image: '/cake-couple.jpg', url: '/birthday-gifts' },
            { name: 'Anniversary Gifts', image: '/couple.jpg', url: '/anniversary-gifts' },
            { name: 'Gifts for Him', image: '/man-gift.webp', url: '/gifts-for-him' },
            { name: 'Gifts for Her', image: '/women-gift.jpg', url: '/gifts-for-her' },
          ].map((category, index) => (
            <div key={index} className="flex flex-col group">
              <Link to={category.url} className="block shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden w-full aspect-square mb-0 rounded-t-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-center text-sm md:text-base py-3 border border-t-0 border-gray-200 rounded-b-md bg-white">{category.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>



      {/* Featured Products */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Bestselling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mixed Roses Bouquet', price: '₹599', image: 'https://cdn.pixabay.com/photo/2018/01/29/07/11/flower-3115353_640.jpg' },
              { name: 'Chocolate Truffle Cake', price: '₹749', image: 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_640.jpg' },
              { name: 'Money Plant', price: '₹499', image: 'https://cdn.pixabay.com/photo/2018/07/16/13/17/monstera-3541387_640.jpg' },
              { name: 'Personalized Mug', price: '₹399', image: 'https://cdn.pixabay.com/photo/2015/05/31/10/54/coffee-791439_640.jpg' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D7D90] font-bold">{product.price}</span>
                    <button className="bg-[#2D7D90] text-white px-3 py-1 rounded text-sm hover:bg-[#236A7A] transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#2D7D90] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">REFER & EARN</h2>
          <div className="max-w-xl mx-auto bg-white text-gray-800 p-4 rounded-md">
            <p className="text-3xl">
              20% OFF
            </p>
          </div>
          <p className="text-lg mb-6">
            FOR YOU,FOR THEM!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
