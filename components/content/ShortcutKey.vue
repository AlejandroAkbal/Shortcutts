<template>
  <div
    class="bg-surface border border-border hover:border-border-variant w-fit-content p-3 my-2 overflow-hidden whitespace-no-wrap"
  >
    <span v-text="text" class="text-secondary mr-2" />
    <code
      v-text="keys.join(' + ')"
      class="text-center text-primary-variant px-2 py-1 border border-primary overflow-hidden"
    />
  </div>
</template>

<script>
export default {
  name: 'ShortcutKey',

  props: {
    text: {
      default: undefined,
      type: String,
      required: false
    },
    keys: {
      default: () => {
        return []
      },
      type: Array,
      required: true
    }
  }
}
</script>
