import React from "react"


const Footer = () => {
  return (



    <footer class="bg-gray-400 bottom-0 top-0" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="xl:col-span-1">
          <a href="/" class="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform text-black tracking-relaxed lg:pr-8">
            <svg class="w-5 h-5" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z" fill="#0c0c0c"></path>
            </svg>        </a>
          <p class="w-1/2 mt-2 text-sm text-gray-500">Unwrapped your mind</p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="font-semibold leading-6 uppercase text-black">
                Solutions
              </h3>
              <ul role="list" class="mt-4 space-y-3">
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="font-semibold leading-6 uppercase text-black">
                Support
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Alpine.js
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
                    API Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="hidden lg:justify-end md:grid md:grid-cols-1">
            <div class="w-full mt-12 md:mt-0">
              <div class="mt-8 lg:justify-end xl:mt-0">
                <h3 class="font-semibold leading-6 uppercase text-black">
                  Subscribe to our newsletter
                </h3>
                <p class="mt-4 text-sm font-light text-gray-500 lg:ml-auto">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <div class="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                  <form class="flex flex-col items-center justify-center max-w-sm mx-auto" action="">
                    {/* <div class="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                      <input name="email" type="email" class="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50" placeholder="Enter your email..." required=""><button type="button" class="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                        <div style="position: relative"></div>
                        Subscribe<!-- -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-auto ml-2">
                          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                        </svg>
                      </button>
                    </div> */}
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
        <span class="mt-2 text-sm font-light text-gray-500">
          Copyright © 2020 - 2021
          <a href="#" class="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@unwrappedHQ</a>. Since 2020
        </span>
      </div>
    </div>
  </footer>
            

  )
};

export default Footer
