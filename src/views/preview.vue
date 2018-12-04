<template>
  <div class="review row">
    <div class="col">
      <h2>Artist</h2>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'preview',
    computed: {
      song() {
        return this.$store.state.activeSong
      }
    }
  }
</script>

<style>
  .preview {
    background: blue
  }
</style>