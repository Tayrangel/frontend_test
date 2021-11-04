<template>
    <div class="lg:row-span-1 bg-white border border-gray-300 rounded-md">
        <!--Cape-->
        <div class="bg-gradient-to-r from-blue-400 to-blue-700 bg-cover h-16 rounded relative">
            <div class="flex">
                <div class="w-1/3 flex justify-center"><a href="#"><img src="../assets/img/user2.jpg" alt="user9" class="h-20 w-20 mt-5 ml-2"></a></div>
                <div class="w-2/3 inline-flex">
                    <div class="text-gray-500 font-bold mt-16 mx-2" >Lorem Ipsum 
                        <div class="text-gray-400 font-extralight -mt-2">@loremipsum</div>
                    </div>
                </div>
            </div>
        </div>
              
        <div class="flex justify-center text-gray-600 md:text-sm mt-10">
            <div class="w-1/3 text-center py-3 lg:px-4">
                <a href="#" class="hover:text-gray-300">
                    <div>Tweets</div>
                    <div class="font-semibold justify-items-center">30</div>
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
        
        <div class="flex justify-center">
            <input type="text" class="h-8 w-48 bg-gray-200 focus:bg-white rounded-full text-xs my-2 px-10" placeholder="Compose New Tweet">
        </div>
    </div>
</template>