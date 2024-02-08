import React, { useRef, useEffect, useState } from "react";

const LazyLoadedImage = ({ src, alt, cssClass,handleClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={cssClass}
      onClick={handleClick}
    />
  );
};

export default LazyLoadedImage;
