<template>
  <div>
    <h2>How to Add Svg</h2>

    <section>
      <h3>By url</h3>
      <img src = "svg_example.svg" />
    </section>

    <section>
      <h3>Using CSS</h3>
      <div class = "svg-example" />
    </section>

    <section>
      <h3>Copy&Paste SVG source</h3>
      <svg
        width="79.375mm"
        height="79.375mm"
        viewBox="0 0 79.375 79.375"
        version="1.1"
        id="svg3144">
        <g
          id="layer1"
          transform="translate(0.6011076,0.33988789)">
          <rect
            style="fill:#ffcc00;stroke-width:6.965"
            id="rect4310"
            width="79.375"
            height="79.375"
            x="-0.6011076"
            y="-0.33988789" />
          <text
            xml:space="preserve"
            style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
            x="39.360275"
            y="30.063971"
            id="text3713"><tspan
              x="39.360275"
              y="30.063971"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;stroke-width:0.264583"
              id="tspan3715">This is</tspan><tspan
              x="39.360275"
              y="43.293095"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;stroke-width:0.264583"
              id="tspan3719">a SVG</tspan><tspan
              x="39.360275"
              y="56.522221"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;stroke-width:0.264583"
              id="tspan3721">file</tspan></text>
        </g>
      </svg>
    </section>

    <section>
      <h3>Vue loader</h3>
      <p>Using https://github.com/visualfanatic/vue-svg-loader</p>
      <SvgExample />
    </section>

  </div>
</template>

<script>
import SvgExample from '../../../public/svg/svg_example.svg';

export default {
  name: 'Svg',
  components: {
    SvgExample
  },
  data() {
    return {
      msg: 'Hola'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

.svg-example {
  width: 300px;
  height: 300px;
  background: url('/svg/svg_example.svg');
}

</style>
