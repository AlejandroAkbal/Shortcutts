<template>
  <div
    :class="{ 'rounded-lg': roundedBorder }"
    class="w-full bg-surface border border-primary p-2 overflow-hidden select-none"
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
    roundedBorder: { default: false, type: Boolean, required: false },
    text: {
      default: undefined,
      type: String,
      required: false
    }
  }
}
</script>
