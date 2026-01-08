import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-[#1E2538] overflow-hidden  h-[526px]">
      <iframe
        className="  h-full w-full"
        src="https://www.google.com/maps?q=5550+W+Executive+Dr+Tampa+FL+33609&output=embed"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
