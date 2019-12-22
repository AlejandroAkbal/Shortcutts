<template>
  <div
    class="bg-surface border border-on-surface h-fit-content w-fit-content p-3"
  >
    <div v-text="keys.join(' + ')" class="text-center text-primary"></div>
  </div>
</template>

<script>
export default {
  name: 'ShortcutKey',

  props: {
    keys: {
      default: () => {
        return ['Ctrl', 'Alt', 'R']
      },
      type: Array,
      required: false
    }
  }
}
</script>
