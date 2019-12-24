<template>
  <div>
    <custom-list-group-item v-for="project in itemList" :project="project" :key="project.name" />
  </div>
</template>

<script>
import CustomListGroupItem from '~/components/CustomListGroupItem.vue'

// 'source' is required
// 'tag' is optional, uses AND logic (all tags required)
export default {
  components: {
    CustomListGroupItem
  },
  props: {
    count: {
      type: Number,
      default: null
    },
    source: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: null
    }
  },
  computed: {
    itemList () {
      if (!this.source) { return null }

      let store = Array.from(this.$store.state[this.source].list)

      if (this.tag) {
        this.tag.split(',').forEach(
          (tag) => { store = store.filter(item => item.tags.includes(tag)) }
        )
      }

      return this.count ? store.slice(0, this.count) : store
    }
  }
}
</script>
