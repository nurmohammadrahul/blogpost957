import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className="hero -mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome to
              <span className='text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient'> Blogpost</span>
            </h1>
            <p className="py-6">
              Welcome to Our Blog! We're excited to have you here! This blog is all about yor experiences. Join us as we explore, and don't hesitate to share your thoughts in the comments.
              Thanks for visiting, and enjoy the journey!
            </p>

            <div className="flex gap-2 justify-center">

              <Link to='/blogs' className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-black">Read Blogs</span>
                </span>
              </Link>
              <Link to='/bookmarks' className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-black">Bookmarks</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;