<template>
  <div>
    <!-- Title -->
    <Title id="title" class="fixed top-0 inset-x-0 mx-auto mt-5 z-0" />

    <!-- Content -->
    <div
      id="content"
      class="bg-background border rounded-lg border-border relative z-10 "
    >
      <div class="p-5">
        <ShortcutTitle :rounded-border="true" text="Google Docs" />
      </div>
      <!-- Grid -->
      <div class="grid custom-grid p-5">
        <!-- Common Actions -->
        <div>
          <ShortcutTitle text="Common actions" />
          <ShortcutKey :keys="['Ctrl', 'C']" text="Copy" />
          <ShortcutKey :keys="['Ctrl', 'X']" text="Cut" />
          <ShortcutKey :keys="['Ctrl', 'V']" text="Paste" />
          <ShortcutKey
            :keys="['Ctrl', 'Shift', 'V']"
            text="Paste without formatting"
          />
          <ShortcutKey :keys="['Ctrl', 'Z']" text="Undo" />
          <ShortcutKey :keys="['Ctrl', 'Shift', 'Z']" text="Redo" />
        </div>

        <!-- Text formatting -->
        <div>
          <ShortcutTitle text="Text formatting" />
          <ShortcutKey :keys="['Ctrl', 'B']" text="Bold" />
          <ShortcutKey :keys="['Ctrl', 'I']" text="Italicize" />
          <ShortcutKey :keys="['Ctrl', 'U']" text="Underline" />
        </div>

        <!-- Paragraph formatting -->
        <div>
          <ShortcutTitle text="Paragraph formatting" />
          <ShortcutKey
            :keys="['Ctrl', ']']"
            text="Increase paragraph indentation"
          />
          <ShortcutKey
            :keys="['Ctrl', '[']"
            text="Decrease paragraph indentation"
          />
          <ShortcutKey
            :keys="['Ctrl', 'Alt', '0']"
            text="Apply normal text style"
          />
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
  components: { Title, ShortcutKey, ShortcutTitle },

  mounted() {
    // Wacky way of having a margin top so content can scroll over the title
    document.getElementById('content').style.marginTop =
      document.getElementById('title').offsetHeight * 1.5 + 'px'
  }
}
</script>

<style></style>
