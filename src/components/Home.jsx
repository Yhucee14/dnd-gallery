import  { useState } from "react";

const imagesData = [
  { src: 'sea.jpeg', tag: 'Nature' },
  { src: 'paris.jpeg', tag: 'City' },
  { src: 'lion.jpeg', tag: 'Animals' },
  { src: 'salah.jpeg', tag: 'Football' },
  { src: 'benz.jpeg', tag: 'Cars' },
  { src: 'computer.jpeg', tag: 'Tech' },
  { src: 'fight.jpeg', tag: 'History' },
  { src: 'pizza.jpeg', tag: 'Food' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter images based on the search query
  const filteredImages = imagesData.filter((image) =>
    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search field */}
      <input
        type="text"
        placeholder="Search by tag"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4 p-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative h-[320px]">
            <img
              src={image.src}
              alt={image.tag}
              className="w-full h-[320px] rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
              {image.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
