<template>
  <div>
    <!-- Title -->
    <Title class="fixed top-0 left-0 right-0 mx-auto mt-5 z-0" />

    <!-- Content -->
    <div
      class="bg-background relative z-10 mt-3/4 md:mt-2/12 border rounded-lg border-border"
      style="height: 200vh;"
    >
      <!-- Grid -->
      <div class="grid  md:grid-automin-2 px-5">
        <!-- border-l border-on-primary border-dashed ml-3 pl-3 -->
        <div class="mt-5">
          <ShortcutTitle text="General" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'R']" text="Bold text" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'I']" text="Italic text" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'U']" text="Underline text" />
        </div>
        <div class="mt-5">
          <ShortcutTitle text="Files" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'R']" text="Bold text" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'I']" text="Italic text" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'U']" text="Underline text" />
        </div>
        <div class="mt-5">
          <ShortcutTitle text="Miscellaneous" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'R']" text="Bold text" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'I']" text="Italic text" />
          <ShortcutKey :keys="['Ctrl', 'Alt', 'U']" text="Underline text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/content/Title'
import ShortcutKey from '~/components/content/ShortcutKey'
import ShortcutTitle from '~/components/content/ShortcutTitle'

export default {
  components: { Title, ShortcutKey, ShortcutTitle }
}
</script>

<style></style>
