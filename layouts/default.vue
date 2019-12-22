<template>
  <div>
    <!-- Navigation bar -->

    <!-- Content -->
    <main class="w-full md:w-4/5 mx-auto">
      <nuxt />
    </main>
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
