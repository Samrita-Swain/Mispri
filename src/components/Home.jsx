const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] mb-8">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Send Flowers & Gifts</h1>
            <p className="text-lg text-gray-600 mb-6">Same Day Delivery Available</p>
            <button className="bg-[#2D7D90] text-white px-6 py-3 rounded-md font-medium hover:bg-[#236A7A] transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'Flowers', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/flowers.jpg' },
            { name: 'Cakes', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/cakes.jpg' },
            { name: 'Plants', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/plants.jpg' },
            { name: 'Combos', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/combos.jpg' },
            { name: 'Gifts', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/gifts.jpg' },
            { name: 'Personalized', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/personalized.jpg' },
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="h-40 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
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
              { name: 'Mixed Roses Bouquet', price: '₹599', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/mixed-roses-bouquet.jpg' },
              { name: 'Chocolate Truffle Cake', price: '₹749', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/chocolate-truffle-cake.jpg' },
              { name: 'Money Plant', price: '₹499', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/money-plant.jpg' },
              { name: 'Personalized Mug', price: '₹399', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/personalized-mug.jpg' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
          <h2 className="text-2xl font-bold mb-4">Database-Driven Menus</h2>
          <p className="text-lg mb-6">
            This demo shows how to create a responsive header and footer with menus fetched from a database.
          </p>
          <div className="max-w-3xl mx-auto bg-white text-gray-800 p-4 rounded-md">
            <p className="text-sm">
              In a real application, you would connect to a database like MySQL, MongoDB, Firebase, or Supabase to fetch the menu items.
              Check the <code className="bg-gray-100 px-1 py-0.5 rounded">src/services/databaseConnection.js</code> file for examples of how to connect to different databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
