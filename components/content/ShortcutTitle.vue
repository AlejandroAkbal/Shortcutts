<template>
  <div
    class="bg-surface border border-primary w-2/3 p-2 overflow-hidden select-none"
  >
    <h1
      v-text="text"
      class="text-center text-xl text-primary-variant px-2 py-1"
    />
  </div>
</template>

<script>
export default {
  name: 'ShortcutTitle',

  props: {
    text: {
      default: undefined,
      type: String,
      required: false
    }
  }
}
</script>
