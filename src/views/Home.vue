<template class="container-fluid">

  <div>
    <div class="row">
      <div class="col-12">
        <h1>Music is Fun</h1>
      </div>
    </div>
    <div class="row">
      <!-- search bar -->
      <div class="col-6">
        <artist></artist>
        <form @submit.prevent="search">
          <input type="text" placeholder="search">
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="col-6">
        <preview></preview>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
  }

</script>