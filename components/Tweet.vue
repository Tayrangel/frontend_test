<!--
<template>
  
</template>

<script>
export default {
  name: 'Tweets',

  data() {
    return (
      tweets: [],
    )
  },

  created() {
    fetch('/api/tweets')
      .then((res) => res.json())
      .then((json) => {
        this.tweets = json.tweets
      })
  },
}

</script>
-->