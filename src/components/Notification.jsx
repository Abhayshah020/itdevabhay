import React, { useState, useEffect } from "react";
import "./main.css";

export const Notification = ({ title, message, status, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (status) {
      setIsOpen(true);
      timer = setTimeout(() => {
        setIsOpen(false);
        onClose();
      }, 2000); // Close automatically after 2 seconds
    }
    return () => clearTimeout(timer);
  }, [status]);
  
  return (
    <>
      {isOpen && (
        <div className="notification">
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{message}</p>
          </div>
        </div>
      )}
    </>
  );
};
