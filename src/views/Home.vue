<template class="container-fluid">

  <div>
    <div class="row">
      <div class="col-12">
        <h1>Music is Fun</h1>
        <form @submit.prevent="search">
          <input type="text" placeholder="search" v-model='query'>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <!-- search bar -->
      <div class="col-6">
        <results></results>
      </div>
      <div class="col-6">
        <preview></preview>
      </div>
    </div>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'
  // import Preview from '@/components/Preview.vue'
  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }

    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    },
    components: {
      Results,
      //Preview
    }
  }


</script>