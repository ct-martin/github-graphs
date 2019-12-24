<template>
  <embed-page :src="srcFull"/>
</template>

<script>
import EmbedPage from '~/components/EmbedPage.vue'

export default {
  components: {
    EmbedPage
  },
  props: {
    src: {
      type: String,
      default: null
    }
  },
  computed: {
    srcFull () {
      // Google Drive Viewer: `https://docs.google.com/gview?url=${this.src}&embedded=true`
      // PDF.js: `https://mozilla.github.io/pdf.js/web/viewer.html?file=${this.src}`
      return `https://mozilla.github.io/pdf.js/web/viewer.html?file=${this.src}`
    }
  }
}
</script>
