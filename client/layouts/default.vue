<template>
  <div>
      <navbar/>

      <div class="main">
          <nuxt/>
      </div>

      <page-footer/>
  </div>
</template>

<script>
import PageFooter from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    PageFooter,
    Navbar
  }
}
</script>
