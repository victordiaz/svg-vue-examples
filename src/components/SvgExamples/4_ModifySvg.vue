<template>
  <div>
    <div v-for = "n in 10" :key = "n" class="svg-container">
      {{getRandomColor()}}
      <svg
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         id="svg3144"
         version="1.1"
         viewBox="0 0 200 200"
         height="200px"
         width="200px">
        <circle
           class = "main-color"
           r="76.735031"
           cy="106.75918"
           cx="102.64568"
           id="path1107"
           :style = "faceColor"
           />
        <circle
           class = "main-color"
           r="23.128273"
           cy="47.572609"
           cx="54.384117"
           id="path1109"
           :style = "faceColor"
          />
        <circle
           class = "main-color"
           id="circle1111"
           cx="149.63412"
           cy="47.572609"
           r="23.128273"
           :style = "faceColor"
           />
        <circle
           r="14.125131"
           cy="80.601555"
           cx="72.137566"
           id="circle1113"
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:4.25373;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <circle
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:4.25373;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="circle1115"
           cx="125.05421"
           cy="80.601555"
           r="14.125131" />
        <circle
           style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.79742;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="circle1117"
           cx="72.845612"
           cy="81.168533"
           r="5.9686055" />
        <circle
           r="5.9686055"
           cy="81.601837"
           cx="125.24599"
           id="circle1119"
           style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.79742;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
           id="path1123"
           d="m 64.690404,137.88753 c 0,0 32.95231,45.12405 78.076356,0"
           style="fill:none;stroke:#000000;stroke-width:9.9;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </svg>
    </div>
    <button v-on:click = "getRandomColor()">Random!</button>
  </div>
</template>

<script>
export default {
  name: 'Svg',
  data() {
    return {
      faceColor: 'rgb(0, 0, 0);'
    }
  },
  methods: {
    getRandomColor() {
      let r = 255 * Math.random()
      let g = 255 * Math.random()
      let b = 255 * Math.random()
      this.faceColor = 'fill: rgb(' + r + ', ' + g + ', ' + b +');'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.main-color {
  fill:#edd400;
  fill-opacity:1;
  stroke:none;
  stroke-width:6.965;
  stroke-linecap:round;
  stroke-miterlimit:4;
  stroke-dasharray:none;
  stroke-opacity:1;
}

</style>
