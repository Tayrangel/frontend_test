<template>
  <div class="flex flex-row my-2">
    <div class="w-1/3">
    <button class="text-gray-400 hover:text-gray-500">Expand</button>
    </div>
    <div class="w-2/3 flex justify-end mr-4">
      <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />  <path d="M13 19.95a8 8 0 0 0 5.3 -12.8" stroke-dasharray=".001 4.13" /></svg></button>
      <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></button>
      <button @click="toggle" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-300 focus:outline-none mx-1">
        <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"   width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
        <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6 text-yellow-500']" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg></button>
      <button class="text-gray-400 hover:text-gray-500 mx-1"><svg class="h-6 w-6 float-left"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg></button>
    </div>    
  </div>

    <!--
       <div class="tooltip">Hover over me
          <span class="tooltiptext">Tooltip text</span>
        </div>
    -->
</template>

<script>
export default {

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

<!--
<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: gray;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: -10%;
  right: 3%;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style> -->