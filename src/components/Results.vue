<template>
  <div class="review row">
    <div class="col">
      <h2>Songs</h2>
    </div>
    <div v-if="results.length > 0" class="row">
      <result v-for="song in results" :songData='song'></result>
    </div>
  </div>
</template>


<script>
  import Result from '@/components/Result.vue'
  export default {
    name: 'results',
    data() {
      return {
        previewedSong: ''
      }
    },
    methods: {
      setActive(song) {
        this.previewedSong = song.id
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    components: {
      Result
    }
  }


</script>

<style>
  .preview {
    background: blue
  }
</style>