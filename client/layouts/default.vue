<template>
  <div class="home-page">
      <navbar/>

      <div class="main">
          <nuxt/>
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
