import { useState, useEffect } from "react";

function NavBar() {
  return (
  <div className=" flex gap-10 ml-20 leading-10 items-end">
      <h1 className="font-bold text-8xl ">Hp</h1>
      <ul className="flex justify-start gap-7 ml-8 font-extrabold text-white">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">filter</a></li>
      </ul>

  </div>
  )
}

export default NavBar;
