<template>
    <div class="bg-green-900 bg-opacity-25">
        <!--Header-->
        <div>
            <Navbar/>
        </div>

        <!--Body-->
        <div class="grid grid-cols-1 md:grid-cols-4 lg:justify-around lg:px-20 py-3">
            <!--First Col-->
            <div class="md:col-span-1 md:mx-3">
                <div class="md:grid-rows-1 lg:grid-rows-2 font-sans mb-5">
                    <Trends/>
                </div>
            </div>

            <!--Second Col-->
            <div class="md:col-span-2 bg-white border border-gray-300 rounded-md mb-5">
                <div class="bg-gradient-to-r from-green-400 to-green-700 bg-cover h-40 rounded relative">
                    <div class="flex">
                        <div class="w-1/3 flex justify-center">
                        <nuxt-link :to="`me`">
                        <img src="../assets/img/user2.jpg" alt="user9" class="h-20 w-20 mt-28 ml-2">
                        </nuxt-link>
                        </div>
                        <div class="w-2/3 flex justify-end mr-4 mt-1">
                            <nuxt-link :to="`me`">
                            <button class="text-green-300 bg-white border border-green-300 hover:border-green-400 hover:text-green-400 rounded px-4 py-1 mt-40 mx-2">Edit</button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                
                <div class="mx-14 mt-10">
                    <div class="text-gray-500 font-bold">Lorem ipsum 
                        <nuxt-link :to="`me`">
                        <div class="text-gray-400 font-extralight -mt-2">@loremipsum</div></nuxt-link>
                        <div class="text-gray-500 font-normal">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In esse nesciunt nostrum velit maxime distinctio dolorum culpa soluta ut voluptatibus alias libero blanditiis.
                        </div>
                        <div class="flex text-gray-400 font-extralight mt-2">
                            <div class="w-1/2">
                                <svg class="h-4 w-4 float-left mt-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                City|xx
                            </div>
                            
                            <div class="w-1/2 hover:text-gray-500">
                                <svg class="h-4 w-4 float-left mt-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />  <line x1="16" y1="21" x2="16" y2="19" />  <line x1="19" y1="16" x2="21" y2="16" />  <line x1="3" y1="8" x2="5" y2="8" />  <line x1="8" y1="3" x2="8" y2="5" /></svg>
                                <a href="http://" target="_blank" rel="noopener noreferrer">xxxxxxxxxxxxxxxx</a>
                            </div>
                        </div>
                        <div class="text-gray-400 font-extralight">
                            <svg class="h-4 w-4 float-left mt-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" /></svg>
                            00/00/0000
                        </div>
                        <div class="bg-white mt-2">
                            <nav class="flex flex-col sm:flex-row justify-around">
                                <button class="block font-medium text-green-700 border-b-2 border-green-700 hover:text-gray-300 focus:outline-none px-6 py-4">Tweets</button>
                                <button class="block font-medium text-green-700 border-b-2 hover:text-gray-300  focus:outline-none px-6 py-4">Replies</button>
                                <button class="block font-medium text-green-700 border-b-2 hover:text-gray-300  focus:outline-none px-6 py-4">Midia</button>
                                <button class="block font-medium text-green-700 border-b-2 hover:text-gray-300  focus:outline-none px-6 py-4">Links</button>
                            </nav>
                        </div>
                        <div>
                            <!--Tweet - Style1-->
                            <div class="flex border-b mt-2" v-for="user in users" :key="user.id">
                                <div class="w-1/4 flex justify-center">
                                    <img :src="user.avatar" class="h-24 w-24 pr-4">
                                </div>
                                <div class="w-3/4">
                                    <div class="text-gray-500 font-semibold" v-text="user.name"></div>
                                    <div class="text-gray-400 font-extralight -mt-2" v-text="user.user"><br></div>
                                    <div class="text-gray-500 font-normal" v-for="tweet in tweets" :key="tweet.id" v-text="tweet.post"></div>
                                    <BtnTweet/>
                                </div>
                            </div>
                            <!--Tweet - Style2-->
                            <div class="flex border-b mt-2" v-for="user in users" :key="'a' + user.id">
                                <div class="w-1/4 flex justify-center">
                                    <img :src="user.avatar" class="h-24 w-24 pr-4">
                                </div>
                                <div class="w-3/4">
                                    <div class="text-gray-500 font-semibold" v-text="user.name"></div>
                                    <div class="text-gray-400 font-extralight -mt-2" v-text="user.user"><br></div>
                                    <div class="text-gray-500 font-normal" v-for="tweet in tweets" :key="tweet.id" v-text="tweet.post"></div>
                                    <img :src="tweet.image" class="pr-4" v-for="tweet in tweets" :key="tweet.id">
                                    <BtnTweet/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Third Col-->
            <div class="md:col-span-1 md:mx-3">
                <div class="grid-rows-2 font-sans">
                    <div class="row-span-1 bg-white border border-gray-300 rounded-md">
                        <div class="font-semibold text-2xl text-gray-500 pl-4 mb-2 border-b">Who to Follow</div>

                        <!--User (x) Follow-->
                        <div class="flex xl:flex-row lg:flex-col md:flex-col lg:text-left md:items-center md:text-center my-2" v-for="user in users" :key="user.id">
                            <div class="w-1/3">
                                <img :src="user.avatar" class="h-20 w-20 ml-4 md:ml-2">
                            </div>
                            <div class="w-2/3 flex lg:justify-between md:ml-4">
                                <div class="text-gray-500 font-bold lg:ml-2">{{ user.name }}
                                <div class="text-gray-400 font-extralight -mt-1">@{{ user.user }}</div>
                                <button class="text-green-300 bg-white border border-green-300 hover:border-green-400 hover:text-green-400 rounded px-4 py-1">Follow</button>
                                </div> 
                                <div class="mr-10 mt-1"><svg class="h-4 w-4 text-gray-400 hover:text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg></div>
                            </div>
                        </div>                   
                    </div>

                    <!--Footer-->
                    <div class="row-span-2 mt-5 bg-white border border-gray-300 rounded-md text-gray-400">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  //server
  name: 'tweets',
  name: 'users',
  
  data() {
    return {
      tweets: [],
      users: []
    }
  },

  
  mounted() {
    this.$axios
    axios.get('/api/tweets').then(res => {
        this.tweets = res.data
    }),

    axios.get('/api/users').then(res => {
        this.users = res.data
    })
  },
}
</script>