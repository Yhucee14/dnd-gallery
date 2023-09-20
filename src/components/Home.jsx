import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/userContext";

const imagesData = [
  { id: 'image1', src: 'sea.jpeg', tag: 'Nature' },
  { id: 'image2', src: 'paris.jpeg', tag: 'City' },
  { id: 'image3', src: 'lion.jpeg', tag: 'Animals' },
  { id: 'image4', src: 'salah.jpeg', tag: 'Football' },
  { id: 'image5', src: 'benz.jpeg', tag: 'Cars' },
  { id: 'image6', src: 'computer.jpeg', tag: 'Tech' },
  { id: 'image7', src: 'fight.jpeg', tag: 'History' },
  { id: 'image8', src: 'pizza.jpeg', tag: 'Food' },
  { id: 'image9', src: 'giraffe.jpg', tag: 'Animals' },
  { id: 'image10', src: 'panda.jpeg', tag: 'Animals' },
  { id: 'image11', src: 'squrriel.jpeg', tag: 'Animals' },
  { id: 'image12', src: 'cheetah.jpeg', tag: 'Animals' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { logoutUser, user } = useUserContext(); // Access the logoutUser function from context
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="py-3 px-2">
      <div className="flex flex-row justify-between px-4">
        <h1 className="flex py-3 text-green-600 font-bold text-xl">DnD Gallery</h1>

        <input
          type="text"
          placeholder="Search images"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[60%] h-[40px] mt-2 px-2 py-1 rounded-lg bg-transparent border text-black focus:outline-none focus:bg-transparent focus:ring-1 focus:ring-green-600 placeholder-black"
        />

        <button
          onClick={handleLogout}
          className="bg-green-600 mt-2 text-white font-bold hover:border-2 hover:border-black px-3 h-[42px] py-1 rounded-xl"
        >
          Logout
        </button>
      </div>



      <div className="grid grid-cols-3 gap-4 p-4 cursor-move ">
        {filteredImages.map((image) => (
          <Draggable key={image.id} >
            <div className="relative h-[320px] ">
              <img
                src={image.src}
                alt={image.tag}
                className="w-full h-[320px] rounded-lg"
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
