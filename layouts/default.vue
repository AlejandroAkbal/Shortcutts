<template>
  <div class="dark">
    <!-- Navigation bar -->

    <!-- Content -->
    <main><nuxt /></main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  // Set background color to theme's color
  head() {
    return {
      bodyAttrs: {
        class: 'bg-background'
      }
    }
  }
}
</script>

<style></style>
