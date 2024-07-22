import React, { useContext, useState } from "react";
import userContext from "../utils/userContext";
import NotAllowed from "./NotAllowed";

function About() {
  const { userName } = useContext(userContext);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (userName === null) return <NotAllowed />;
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-100 p-8">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-orange-600">About Us</h1>
      <p className="leading-relaxed text-gray-700 mb-6">
        Welcome to our food delivery service! We are committed to bringing you the best dining experience by delivering your favorite meals right to your doorstep.
      </p>
      
      <button 
        onClick={toggleShowMore} 
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      {showMore && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">Our Mission</h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            Our mission is to make food delivery as convenient and seamless as possible. We partner with top restaurants to ensure a wide variety of options.
          </p>
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">Our Team</h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            Our dedicated team is passionate about food and technology. We work tirelessly to improve our service and exceed our customers' expectations.
          </p>
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">Join Us</h2>
          <p className="leading-relaxed text-gray-700">
            We're always on the lookout for talented individuals to join our team. If you're interested in being part of our exciting journey, reach out to us!
          </p>
        </div>
      )}
    </div>
  </div>
  );
}

export default About;
