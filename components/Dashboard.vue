<template>
    <div class="lg:row-span-1 bg-white border border-gray-300 rounded-md">
        <!--Cape-->
        <div class="bg-gradient-to-r from-green-400 to-green-700 bg-cover h-16 rounded relative">
            <div class="flex">
                <div class="w-1/3 flex justify-center">
                <nuxt-link :to="`me`">
                <img src="../assets/img/user2.jpg" alt="user9" class="h-20 w-20 mt-5 ml-2">
                </nuxt-link>
                </div>
                <div class="w-2/3 inline-flex">
                    <nuxt-link :to="`me`">
                    <div class="text-gray-500 font-bold mt-16 mx-2" >Lorem Ipsum 
                        <div class="text-gray-400 font-extralight -mt-2">@loremipsum</div>
                    </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
              
        <div class="flex lg:flex-row md:flex-col justify-center md:items-center text-gray-600 mt-10 md:mt-12 py-3">
            <div class="w-1/3 text-center">
                <a href="#" class="hover:text-gray-300">
                    <div>Tweets</div>
                    <div class="font-semibold justify-items-center">30</div>
                </a>
            </div>
            <div class="w-1/3 text-center">
                <a href="#" class="hover:text-gray-300">
                    <div>Followers</div>
                    <div class="font-semibold justify-items-center">5000</div>
                </a>
            </div>
            <div class="w-1/3 text-center">
                <a href="#" class="hover:text-gray-300">
                    <div>Following</div>
                    <div class="font-semibold justify-items-center">1995</div>
                </a>
            </div>
        </div>
        
        <div class="flex justify-center">
            <input type="text" class="h-8 w-48 md:w-40 text-xs text-center bg-white border border-green-600 focus:border-green-900 rounded px-10 my-2" placeholder="Compose New Tweet">
        </div>
    </div>
</template>