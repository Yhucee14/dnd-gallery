import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/userContext";

const imagesData = [
  { id: 'image1', src: 'sea.jpeg', tag: 'Nature' },
  { id: 'image2', src: 'code.png', tag: 'Tech' },
  { id: 'image3', src: 'girona.jpeg', tag: 'Football' },
  { id: 'image4', src: 'tokyo.jpeg', tag: 'City' },
  { id: 'image5', src: 'squrriel.jpeg', tag: 'Animals' },
  { id: 'image6', src: 'red.jpeg', tag: 'Cars' },
  { id: 'image7', src: 'paris.jpeg', tag: 'City' },
  { id: 'image8', src: 'lion.jpeg', tag: 'Animals' },
  { id: 'image9', src: 'salah.jpeg', tag: 'Football' },
  { id: 'image10', src: 'trees.jpeg', tag: 'Nature' },
  { id: 'image11', src: 'benz.jpeg', tag: 'Cars' },
  { id: 'image12', src: 'squrriel.jpeg', tag: 'Animals' },
  { id: 'image13', src: 'computer.jpeg', tag: 'Tech' },
  { id: 'image14', src: 'fight.jpeg', tag: 'History' },
  { id: 'image15', src: 'jeep.jpeg', tag: 'Cars' },
  { id: 'image16', src: 'pitch.jpeg', tag: 'Football' },
  { id: 'image17', src: 'pizza.jpeg', tag: 'Food' },
  { id: 'image18', src: 'mountain.jpeg', tag: 'Nature' },
  { id: 'image19', src: 'giraffe.jpg', tag: 'Animals' },
  { id: 'image20', src: 'ai.jpeg', tag: 'Tech' },
  { id: 'image21', src: 'panda.jpeg', tag: 'Animals' },
  { id: 'image22', src: 'chev.jpeg', tag: 'Cars' },
  { id: 'image23', src: 'lights.jpeg', tag: 'Nature' },
  { id: 'image24', src: 'cheetah.jpeg', tag: 'Animals' },
  { id: 'image25', src: 'messi.jpeg', tag: 'Football' },
  { id: 'image26', src: 'moscow.jpeg', tag: 'City' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { logoutUser, user } = useUserContext(); // Access the logoutUser function from context
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Track mobile navigation state

  // Filter images based on the search query
  const filteredImages = imagesData.filter((image) =>
    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!user) {
      // User is not authenticated, redirect to the login page
      navigate("/signin");
    } else {
      // User is authenticated, set loading to false
      setLoading(false);
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logoutUser();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="py-3 px-2">
    <nav className="flex flex-col sm:flex-row justify-between items-center px-4">
      <div className="flex items-center justify-between">
        <h1 className="flex py-3 text-green-600 font-bold xx:ml-[-16px] sm:ml-[2px] text-xl">DnD Gallery</h1>
        <button
          className="text-green-600 ml-44 text-2xl sm:hidden"
          onClick={toggleMobileNav}
        >
          ☰
        </button>
      </div>

      {isMobileNavOpen ? ( 
        <div className="sm:hidden flex flex-col items-start">
          <input
            type="text"
            placeholder="Search, eg Cars, Animals"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[100%] h-[40px] mt-2 px-2 py-1 rounded-lg bg-transparent border text-black focus:outline-none focus:bg-transparent focus:ring-1 focus:ring-green-600 placeholder-black"
          />
          <button
            onClick={handleLogout}
            className="bg-green-600 mt-2 ml-40 text-white font-bold hover:border-2 hover:border-black px-3 h-[42px] py-1 rounded-xl"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="hidden sm:flex space-x-2">
          <input
            type="text"
            placeholder="Search, eg Cars, Animals"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[100%] h-[40px] mt-2 px-2 py-1 rounded-lg bg-transparent border text-black focus:outline-none focus:bg-transparent focus:ring-1 focus:ring-green-600 placeholder-black"
          />
          <button
            onClick={handleLogout}
            className="bg-green-600 mt-2 text-white font-bold hover:border-2 hover:border-black px-3 h-[42px] py-1 rounded-xl"
          >
            Logout
          </button>
        </div>
      )}
    </nav>

    <div className="grid sm:grid-cols-3 xx:grid-cols-2 xx:gap-2 sm:gap-4 sm:p-4 xx:py-2 cursor-move">
      {filteredImages.map((image) => (
        <Draggable key={image.id}>
          <div className="relative sm:w-full sm:h-[320px] xx:w-[170px] xx:hover:opacity-100">
            <img
              src={image.src}
              alt={image.tag}
              className="w-full h-[320px] xx:hover:opacity-10 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
              {image.tag}
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  </div>
);
};


export default Home;
