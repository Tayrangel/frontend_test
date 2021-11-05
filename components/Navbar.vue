<template>
    <nav>
        <div class="w-full xl:h-12 md:h-16 bg-white">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:justify-around px-20 py-2">
              <div class="hidden md:block">
                <div class="flex flew-row text-green-700 font-sans py-1">
                  <nuxt-link :to="`/`" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </nuxt-link>

                  <a href="#" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Notifications
                  </a>

                  <a href="#" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    Discover
                  </a>

                  <nuxt-link :to="`profile`" class="px-1 hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="float-left h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Me
                  </nuxt-link>
                </div>
              </div>              

            <!--Second Module-->
            <div class="flex justify-center">
              <div class="flex-shrink-0">
                <a href="#" class="text-green-900 text-opacity-50"><svg class="h-6 w-6"  viewBox="0 0 20 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
              </div>
            </div>

            <!--Third Module-->
            <div class="hidden md:block">
              <div class="flex flex-row justify-center lg:justify-around text-green-700 font-sans">
                <input type="text" class="h-8 w-48 text-xs text-center bg-white border border-green-600 focus:border-green-900 rounded px-10 " placeholder="Search Twitter">
                <a href="#" class="px-2">
                  <svg class="h-8 w-8 hover:text-gray-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
                </a>
                <a href="#" class="px-2">
                  <svg class="h-8 w-8 hover:text-gray-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                </a>
                <a href="#" class="px-2">
                  <svg class="h-8 w-8 hover:text-gray-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>
                </a>
              </div>
            </div>
            
            <!-- Mobile Menu -->
            <div class="-mr-2 flex justify-end md:hidden">
              <!--Button Menu-->
              <button @click="toggle" class="inline-flex items-center justify-center rounded-md text-green-900 hover:text-white hover:bg-green-700 focus:outline-none focus:bg-green-900 focus:text-white">
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
          <div class="text-center bg-white px-2 pt-2 pb-3 sm:px-3">
            <nuxt-link :to="`/`" class="block text-base text-white font-medium bg-green-900 bg-opacity-50 focus:outline-none focus:text-white focus:bg-green-900 rounded-md px-3 py-2">
              Home
            </nuxt-link>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-900 text-opacity-50 hover:text-white hover:bg-green-900 hover:bg-opacity-75 focus:outline-none focus:text-white focus:bg-green-900">
              Notifications
            </a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-900 text-opacity-50 hover:text-white hover:bg-green-900 hover:bg-opacity-75 focus:outline-none focus:text-white focus:bg-green-900">
              Discover
            </a>
            <nuxt-link :to="`profile`" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-900 text-opacity-50 hover:text-white hover:bg-green-900 hover:bg-opacity-75 focus:outline-none focus:text-white focus:bg-green-900" >
              Me
            </nuxt-link>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-900 text-opacity-50 hover:text-white hover:bg-green-900 hover:bg-opacity-75 focus:outline-none focus:text-white focus:bg-green-900">
              Tweet
            </a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-900 text-opacity-50 hover:text-white hover:bg-green-900 hover:bg-opacity-75 focus:outline-none focus:text-white focus:bg-green-900">
              Configuration
            </a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-green-900 text-opacity-50 hover:text-white hover:bg-green-900 hover:bg-opacity-75 focus:outline-none focus:text-white focus:bg-green-900">
              Edit
            </a>
            <input type="text" class="h-8 w-48 text-xs text-center bg-white border border-green-600 focus:border-green-900 rounded px-10" placeholder="Search Twitter">
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  //mobile e favorite
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
}
</script>
