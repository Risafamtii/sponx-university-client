import React, { useState } from 'react';
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return(

<nav className="bg-white px-1 py-0.1 flex justify-between">
    <div className="flex items-center text-xl">

    <div className="inline-flex ">
      <img
                src={assets.logo}
                alt="Logo"
                className="h-[60px] w-auto mt-4"
                />
        </div>

    </div>
    <div className="flex items-center gap-x-5">

    </div>
</nav>
  )
};

export default Navbar;
