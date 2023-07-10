import React from "react"


const Footer = () => {
  return (



    <footer class="bg-gray-700 bottom-0 top-0" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="xl:col-span-1">
          <a href="/" class="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-[--gen-color] tracking-relaxed lg:pr-8">
            <svg class="w-5 h-5" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z" fill="#0c0c0c"></path>
            </svg>        </a>
          <p class="w-1/2 mt-2 text-sm text-white">Unwrapped your mind</p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="font-semibold leading-6 uppercase text-[--gen-color]">
                Solutions
              </h3>
              <ul role="list" class="mt-4 space-y-3">
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="font-semibold leading-6 uppercase text-[--gen-color]">
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Alpine.js
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-white hover:text-blue-600">
                    API Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="hidden lg:justify-end md:grid md:grid-cols-1">
            <div class="w-full mt-12 md:mt-0">
              <div class="mt-8 lg:justify-end xl:mt-0">
                <h3 class="font-semibold leading-6 uppercase text-[--gen-color]">
                  Subscribe to our newsletter
                </h3>
                <p class="mt-4 text-sm font-light text-white lg:ml-auto">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <div class="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                  <form class="flex flex-col items-center justify-center max-w-sm mx-auto" action="">

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
      <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
        <span class="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only"> github</span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-github" role="img" aria-label="logo github"></ion-icon>
  
          </a>
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only"> twitter</span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-twitter" role="img" aria-label="logo twitter"></ion-icon>
          </a>
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only">Instagram</span>
           <ion-icon class="w-5 h-5 md hydrated" name="logo-instagram" role="img" aria-label="logo instagram"></ion-icon>
          </a>
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only">Linkedin</span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-linkedin" role="img" aria-label="logo linkedin"></ion-icon>
          </a>
        </span>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <span class="mt-2 text-sm font-light text-white">
          Copyright © 2022 - 2023
          <a href="#" class="mx-2 text-[--gen-color] hover:text-white" rel="noopener noreferrer">@happyhourHQ</a>. Since 2022
        </span>
      </div>
    </div>
  </footer>
            

  )
};

export default Footer
