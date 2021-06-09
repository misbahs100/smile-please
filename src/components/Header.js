import React from 'react';
import mis from '../images/image 1-2.png'

const Header = () => {
    return (
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <img className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" src={mis} alt="" />
                    <span class="ml-3 text-xl">TimeStamp</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-white">Home</a>
                    <a class="mr-5 hover:text-white">About</a>
                    <a class="mr-5 hover:text-white">Features</a>
                    <a class="mr-5 hover:text-white">??</a>
                </nav>
                <button class="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;