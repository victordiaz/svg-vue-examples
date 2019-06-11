<template>
  <div>
    <div class = "svg-container">

      <!--
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
      -->

      <svg
        id="svg3144"
        version="1.1"
        viewBox="0 0 200 200"
        height="800px"
        width="800px">

        <g
          transform="translate(0.6011076,0.33988789)"
          id="layer1">
          <rect
            y="-0.33988789"
            x="-0.6011076"
            height="211.66667"
            width="211.66667"
            id="rect4310"
            style="fill:#ffcc00;stroke-width:18.5733" />
          <path
            id="path846"
            d="m 26.277834,177.99432 c 0,0 5.138253,-73.85775 60.806273,-56.33529 55.668023,17.52247 95.357643,-0.73832 102.320123,-58.39245"
            style="fill:none;stroke:#000000;stroke-width:6.965;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none" />
          <text
            id="text3713"
            style="font-style:normal;font-weight:normal;font-size:0.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
            xml:space="preserve">
            <textPath
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:11.2889px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
              id="textPath848"
              :startOffset="`${offset}%`"
              xlink:href="#path846">{{selected}}</textPath></text>

          <text
            id="text3715"
            style="font-style:normal;font-weight:normal;font-size:0.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
            xml:space="preserve">
            <textPath
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:11.2889px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
              id="textPath848"
              :startOffset="`${offset2}%`"
              xlink:href="#path846">{{selected}}</textPath></text>
        </g>
      </svg>

      <select v-model="selected">
        <option disabled value="">select something</option>
        <option>Hello</option>
        <option>Lalalalal</option>
        <option>Lolololololo</option>
        <option>🐱</option>
      </select>

    </div>
  </div>
</template>

<script>
import { setTimeout, setInterval } from 'timers';
export default {
  name: 'Svg',
  data() {
    return {
      myvalues: [10, 20, 30, 10, 50, 2, 50],
      offset: 0,
      offset2: 0,
      selected: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.offset = this.offset + 1
      this.offset2 = this.offset2 + 0.1

      if (this.offset > 130) this.offset = 0
    }, 30)
  }
}
</script>

<style lang="scss" scoped>
</style>
