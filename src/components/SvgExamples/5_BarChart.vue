<template>
  <div>
    <div class = "svg-container">

      <svg
        viewBox="0 0 100% 100%"
        height="500px"
        width="500px">
        <g id="layer1">
          <rect
            v-for = "(v, i) in myvalues"
            :key = "v"
            style="fill:#ffcc00;stroke-width:6.965"
            id="rect4310"
            :width="20"
            :height="`${v}`"
            :x="`${i * 25}`"
            y="0" />
        </g>
      </svg>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Svg',
  data() {
    return {
      myvalues: [10, 20, 30, 10, 50, 2, 50]
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
