<template>
  <div class="bg-gray-200">
    <div class="bg-gray-200">
      <!--Header-->
      <!--First Module-->
      <nav>
        <div class="w-full lg:h-12 md:h-16 bg-white">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:justify-around px-20 py-3">
              <div class="hidden md:block">
                <div class="flex flew-row text-gray-400 font-sans">
                  <a href="#" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home</a>
                  <a href="#" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Notifications</a>
                  <a href="#" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    Discover</a>
                  <a href="#" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Me</a>
                </div>
              </div>              

            <!--Second Module-->
            <div class="flex justify-center">
              <div class="flex-shrink-0">
                <a href="#" class="text-blue-300 mr-4 pb-6 md:py-8"><svg class="h-6 w-6"  viewBox="0 0 20 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
              </div>
            </div>

            <!--Third Module-->
            <div class="hidden md:block">
              <div class="flex flex-row lg:justify-around text-gray-400 font-sans">
                <input type="text" class="bg-gray-200 focus:bg-white h-8 px-4 text-xs w-48 rounded-full" placeholder="Search Twitter">
                <a href="#" class="px-2">
                  <svg class="h-8 w-8 text-gray-400 hover:text-gray-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
                </a>
                <a href="#" class="px-2">
                  <svg class="h-8 w-8 text-gray-400 hover:text-gray-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                </a>
                <a href="#" class="px-2">
                  <svg class="h-8 w-8 text-gray-400 hover:text-gray-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
                </a>
              </div>
            </div>
            
            <!-- Mobile Menu -->
            <div class="-mr-2 flex justify-end md:hidden">
              <!--Button Menu-->
              <button @click="toggle" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" ></path>
                </svg>
                <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
          <div class="px-2 pt-2 pb-3 sm:px-3 text-center">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-400 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="float-left w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>Home</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>Notifications</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>Discover</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>Me</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg class="float-left h-6 w-6 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>Tweet</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg class="float-left h-6 w-6 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>Configuration</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-600">
              <svg class="float-left h-6 w-6 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>Edit</a>
            <input type="text" class="bg-gray-200 focus:bg-white h-8 px-4 text-center text-xs w-48 rounded-full" placeholder="Search Twitter">
          </div>
        </div>
      </nav>

    <!--Body-->
    <div>
      <div class="grid grid-cols-1 md:grid-cols-4 lg:justify-around lg:px-20 py-3">
        
        <div class="md:col-span-1 md:mx-3">
          <!--Profile-->
          <div class="md:grid-rows-1 lg:grid-rows-2 font-sans">
            <div class="lg:row-span-1 bg-white border border-gray-300 rounded-md">
              <!--Imagens-->
              <div class="bg-gradient-to-r from-blue-400 to-blue-700 bg-cover h-16 rounded relative">
                <div class="flex">
                  <div class="w-1/3 flex justify-center"><a href="#"><img src="../assets/img/user9.jpg" alt="user9" class="h-20 w-20 mt-5 ml-2"></a></div>
                  <div class="w-2/3 inline-flex"><div class="text-gray-500 font-bold mt-16 mx-2">Lorem Ipsum <div class="text-gray-400 font-extralight -mt-2">@loremipsum</div></div></div>
                </div>
              </div>
              
              <div class="flex justify-center text-gray-600 md:text-sm mt-10">
                <div class="w-1/3 text-center py-3 lg:px-4">
                  <a href="#" class="hover:text-gray-300">
                    <div>Tweets</div>
                    <div class="font-semibold justify-items-center">2021</div>
                  </a>
                </div>
                <div class="w-1/3 text-center py-3 lg:px-4">
                  <a href="#" class="hover:text-gray-300">
                    <div>Followers</div>
                    <div class="font-semibold justify-items-center">5000</div>
                  </a>
                </div>
                <div class="w-1/3 text-center py-3 lg:px-4">
                  <a href="#" class="hover:text-gray-300">
                    <div>Following</div>
                    <div class="font-semibold justify-items-center">1995</div>
                  </a>
                </div>
              </div>
              <input type="text" class="bg-gray-200 focus:bg-white h-8 px-4 mx-10 my-5 md:mx-2 md:ml-2 text-xs w-48 md:w-36 rounded-full " placeholder="Compose New Tweet">
            </div>

            <!--Trends-->
            <div class="row-span-2 mt-5 bg-white border border-gray-300 rounded-md text-gray-400">
              <div class="font-semibold text-2xl text-gray-500 pl-4 mb-2 border-b">Trends</div>
              <ul class="font-light text-base ml-4">
              <li><a href="#" class="hover:text-gray-300">#Frontend_Test</a></li>
              <li><a href="#" class="hover:text-gray-300">#IT</a></li>
              <li><a href="#" class="hover:text-gray-300">#Github</a></li>
              <li><a href="#" class="hover:text-gray-300">#Dev</a></li>
              <li><a href="#" class="hover:text-gray-300">#iloveIT</a></li>
              <li><a href="#" class="hover:text-gray-300">#Program</a></li>
              <li><a href="#" class="hover:text-gray-300">#Project</a></li>
              <li><a href="#" class="hover:text-gray-300">#Software</a></li>
              <li><a href="#" class="hover:text-gray-300">#Technology</a></li>
              <li><a href="#" class="hover:text-gray-300">#Frontenddeveloper</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!--Tweets-->
        <div class="md:col-span-2 bg-white border border-gray-300 rounded-md">
          <div class="font-semibold text-2xl text-gray-500 pl-4 mb-2 border-b">Tweets</div>
          <!--Tweet - Style1 -->
         <div class="flex border-b">
            <div class="w-1/4 flex justify-center">
              <a href="#"><img src="../assets/img/user1.jpg" alt="user1" class="h-20 w-20 mx-4"></a>
            </div>
            <div class="w-3/4">
              <div class="text-gray-500 font-semibold">Lorem Ipsum</div>
              <div class="text-gray-400 font-extralight">@loremipsum</div>
              <div class="text-gray-500 font-normal"><p v-for="video in videos" :key="video.id"> {{ video.name }} </p></div>
              <div class="flex flex-row my-2">
                <button class="text-gray-400 hover:text-gray-500 mr-5">Expand</button>
                <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />  <path d="M13 19.95a8 8 0 0 0 5.3 -12.8" stroke-dasharray=".001 4.13" /></svg>Reply</button>
                <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>Retweet</button>
                <button @click="toggle" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-300 focus:outline-none mx-1">
                  <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"   width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
                  <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6 text-red-500']" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg> Favorite</button>
                <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg>More</button>
              </div>
            </div>
          </div>

          <!--Tweet - Style2-->
          <div class="flex border-b mt-2">
                <div class="w-1/4 flex justify-center">
                  <a href="#"><img src="../assets/img/user3.jpg" alt="user3" class="h-20 w-20 mx-4"></a>
                </div>
                <div class="w-3/4">
                  <div class="text-gray-500 font-semibold">Lorem Ipsum</div>
                  <div class="text-gray-400 font-extralight">@loremipsum</div>
                  <div class="text-gray-500 font-normal mr-2"> <img src="../assets/img/tweet1.jpg" alt="tweet1"></div>
                  <div class="flex flex-row my-2">
                    <button class="text-gray-400 hover:text-gray-500 mr-5">Expand</button>
                    <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />  <path d="M13 19.95a8 8 0 0 0 5.3 -12.8" stroke-dasharray=".001 4.13" /></svg>Reply</button>
                    <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>Retweet</button>
                    <button @click="toggle" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-300 focus:outline-none mx-1">
                      <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"   width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
                      <svg class="h-8 w-8 text-gray-500"
                      <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6 text-red-500']" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg> Favorite</button>
                    <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg>More</button>
                  </div>
                </div>
              </div>
        </div>

        <!--Who to Follow-->
        <div class="md:col-span-1 md:mx-3">
          <div class="grid-rows-2 font-sans">
            <div class="row-span-1 bg-white border border-gray-300 rounded-md">
              <div class="font-semibold text-2xl text-gray-500 pl-4 mb-2 border-b">Who to Follow</div>
              <!--User (x) Follow-->
              <div class="flex md:text-sm">
                <div class="w-1/3">
                  <a href="#"><img src="../assets/img/user9.jpg" alt="user9" class="h-20 w-20 ml-4"></a>
                </div>
                <div class="w-2/3 flex lg:justify-between md:ml-4">
                  <div class="text-gray-500 font-bold lg:ml-2">Lorem Ipsum 
                    <div class="text-gray-400 font-extralight -mt-2">@loremipsum</div>
                    <button class="text-blue-300 bg-white border border-blue-300 hover:border-blue-400 hover:text-blue-400 rounded-full px-4 py-1">Follow</button>
                  </div> 
                  <div class="mr-10 mt-1"><svg class="h-4 w-4 text-gray-400 hover:text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg></div>
                </div>
              </div>
              
              <!--User (x) Follow-->
              <div class="flex mt-2 mb-2 md:text-sm">
                <div class="w-1/3">
                  <a href="#"><img src="../assets/img/user10.jpg" alt="user10" class="h-20 w-20 ml-4"></a>
                </div>
                <div class="w-2/3 flex lg:justify-between md:ml-4">
                  <div class="text-gray-500 font-bold lg:ml-2">Lorem Ipsum 
                    <div class="text-gray-400 font-extralight -mt-2">@loremipsum</div>
                    <button class="text-blue-300 bg-white border border-blue-300 hover:border-blue-400 hover:text-blue-400 rounded-full px-4 py-1">Follow</button>
                  </div> 
                  <div class="mr-10 mt-1"><svg class="h-4 w-4 text-gray-400 hover:text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg></div>
                </div>
              </div>         
            </div>

            <!--Footer-->
            <div class="row-span-2 mt-5 bg-white border border-gray-300 rounded-md text-gray-400">
              <div class="text-gray-300 font-extralight mx-4 hover:text-gray-400 ">
                <p>&copy; 
                  <a href="#">Twitter</a> 
                  <a href="#">About</a> 
                  <a href="#">Help</a>
                  <a href="#">Terms</a>
                  <a href="#">Privacy</a>
                  <a href="#">Cookies</a>
                  <a href="#">Blog</a>
                  <a href="#">Developers</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  //mobile
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },

  //server
  name: 'videos',
  data() {
    return {
      videos: [],
    }
  },

  mounted() {
    axios.get('/api/videos').then(res => {
        this.videos = res.data
    })
  },

}
</script>