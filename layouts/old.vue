<template>
  <div>
    <navbar />
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/layouts/partials/Navbar'
import Footer from '@/layouts/partials/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
