<template>
  <div class="bg-gray-200">
    <!--Header-->
    <div>
      <Navbar/>
    </div>

    <!--Body-->
    <div class="grid grid-cols-1 md:grid-cols-4 lg:justify-around lg:px-20 py-3">
      <!--First Col-->
      <div class="md:col-span-1 md:mx-3">
          <div class="md:grid-rows-1 lg:grid-rows-2 font-sans">
            <Dashboard/>
            <Trends/>
          </div>
      </div>

      <!--Second Col-->
      <div class="md:col-span-2 bg-white border border-gray-300 rounded-md">
        <div class="font-semibold text-2xl text-gray-500 pl-4 mb-2 border-b">Tweets</div>
        <!--Tweet - Style1 -->
        <div class="flex border-b mt-2" v-for="simple in simples" :key="simple.id">
          <div class="w-1/4 flex justify-center">
            <img :src="simple.avatar" class="h-24 w-24 pr-4">
          </div>
          <div class="w-3/4">
            <div class="text-gray-500 font-semibold">{{ simple.name }}</div>
            <div class="text-gray-400 font-extralight">@{{ simple.user }} <br></div>
            <div class="text-gray-500 font-normal">{{ simple.post }}</div>
            <BtnTweet/>
          </div>
        </div>
        <!--Tweet - Style2-->
        <div class="flex border-b mt-2" v-for="tweet in tweets" :key="tweet.id">
          <div class="w-1/4 flex justify-center">
            <img :src="tweet.avatar" class="h-24 w-24 pr-4">
          </div>
          <div class="w-3/4">
            <div class="text-gray-500 font-semibold">{{ tweet.name }}</div>
            <div class="text-gray-400 font-extralight">@{{ tweet.user }} <br></div>
            <div class="text-gray-500 font-normal">{{ tweet.post }}</div>
            <img :src="tweet.image" class="pr-4">
            <BtnTweet/>
          </div>
        </div>
      </div>

      <!--Third Col-->
      <div class="md:col-span-1 md:mx-3">
        <div class="grid-rows-2 font-sans">
          <div class="row-span-1 bg-white border border-gray-300 rounded-md">
            <div class="font-semibold text-2xl text-gray-500 pl-4 mb-2 border-b">Who to Follow</div>

            <!--User (x) Follow-->
            <div class="flex md:text-sm my-2" v-for="follow in follows" :key="follow.id">
              <div class="w-1/3">
                <img :src="follow.avatar" class="h-20 w-20 ml-4">
              </div>
              <div class="w-2/3 flex lg:justify-between md:ml-4">
                <div class="text-gray-500 font-bold lg:ml-2">{{ follow.name }}
                  <div class="text-gray-400 font-extralight -mt-2">@{{ follow.user }}</div>
                  <button class="text-blue-300 bg-white border border-blue-300 hover:border-blue-400 hover:text-blue-400 rounded-full px-4 py-1">Follow</button>
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
  name: 'simples',
  name: 'tweets',
  name: 'follows',
  
  data() {
    return {
      simples: [],
      tweets: [],
      follows: []
    }
  },

  mounted() {
    axios.get('/api/simples').then(res => {
        this.simples = res.data
    }),

    axios.get('/api/tweets').then(res => {
        this.tweets = res.data
    }),

    axios.get('/api/follows').then(res => {
        this.follows = res.data
    })
  },

}
</script>