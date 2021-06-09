import React from 'react';
import feature from '../images/feature1.jpg';

const Features = () => {
    return (
        <div>
            <section class="text-gray-400 bg-gray-900 body-font">
            <h1 className="text-white text-5xl text-center title-font leading-relaxed">What We Provide to Smile</h1>
                <div class="container px-5 py-24 mx-auto flex flex-row-reverse flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src={feature} />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a class="mt-3 text-purple-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a class="mt-3 text-purple-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">Neptune</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a class="mt-3 text-purple-400 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* statistic */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
                                <p class="leading-relaxed">Downloads</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
                                <p class="leading-relaxed">Users</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl text-white">74</h2>
                                <p class="leading-relaxed">Files</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl text-white">46</h2>
                                <p class="leading-relaxed">Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;