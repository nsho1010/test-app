import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center bg-gray-800 text-white  px-8 py-6">
        <h1 className="font-bold text-xl">Blog</h1>
        <ul className="font-bold text-xl">
          <li>お問い合わせ</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
