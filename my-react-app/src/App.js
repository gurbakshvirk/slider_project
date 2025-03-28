import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaMusic, FaImage } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import local media files
import localImage1 from "./assets/dodge.jpg";
import localImage2 from "./assets/gwagon.jpg";
import localImage4 from "./assets/jeep.jpg";  
import localImage5 from "./assets/mustang.jpg";
import localImage6 from "./assets/video2.webm";
import localImage7 from "./assets/videoplayback.webm";
import localImage8 from "./assets/wallpaper.jpeg";
// import localImage9 from "./assets/9.jpg";
// import localImage10 from "./assets/10.jpg";
// import localImage11 from "./assets/11.jpg";
// import localImage12 from "./assets/12.jpg";  
// import localImage13 from "./assets/13.jpg";
// import localImage14 from "./assets/14.jpg";
// import localImage15 from "./assets/15.jpg";
// import localImage16 from "./assets/16.jpg";
// import localImage17 from "./assets/17.jpg";
// import localImage18 from "./assets/18.jpg";

// Import audio file
//import harryPotterTheme from "./assets/audio/Harry-Potter-Theme.mp3"; 

const slides = [
  { type: "image", src: localImage1, title: "Local Image" },
  { type: "image", src: localImage2, title: "Sample Image" },
  // { type: "image", src: localImage3, title: "Sample Image" },
  { type: "image", src: localImage4, title: "Sample Image" },
  { type: "image", src: localImage5, title: "Sample Image" },
  { type: "video", src: localImage6, title: "Sample Image" },
  { type: "video", src: localImage7, title: "Sample Image" },
  { type: "image", src: localImage8, title: "Sample Image" },
  // { type: "image", src: localImage9, title: "Sample Image" },
  // { type: "image", src: localImage10, title: "Sample Image" },
  // { type: "image", src: localImage11, title: "Sample Image" },
  // { type: "image", src: localImage12, title: "Sample Image" },
  // { type: "image", src: localImage13, title: "Sample Image" },
  // { type: "image", src: localImage14, title: "Sample Image" },
  // { type: "image", src: localImage15, title: "Sample Image" },
  // { type: "image", src: localImage16, title: "Sample Image" },
  // { type: "image", src: localImage17, title: "Sample Image" },
  // { type: "image", src: localImage18, title: "Sample Image" },
  // { type: "audio", src: harryPotterTheme, title: "Harry Potter Theme" },
];

export default function MediaSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const audioRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => setActiveIndex(current),
  };

  // Pause audio when changing slides
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [activeIndex]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 text-center">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg bg-white">
            {slide.type === "image" && (
              <>
                <FaImage size={40} className="text-blue-500 mb-3" />
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="rounded-lg"
                  style={{ width: "100%", height: "500px", objectFit: "contain" }}
                />
              </>
            )}
            {slide.type === "audio" && (
              <>
                <FaMusic size={40} className="text-green-500 mb-3" />
                <audio ref={audioRef} controls className="w-full">
                  <source src={slide.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
// new code
// changes 2
// added change
// sehaj
// Github