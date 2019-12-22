<template>
  <div>
    <Title class="mx-auto" />

    <div :key="n" v-for="n in 3">
      <ShortcutKey />
    </div>
  </div>
</template>

<script>
import Title from '~/components/content/Title'
import ShortcutKey from '~/components/content/ShortcutKey'

export default {
  components: { Title, ShortcutKey }
}
</script>

<style></style>
