<template>
  <div>
    <div v-for = "e in elements" class="svg-container">

      <svg
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         width="211.66667mm"
         height="211.66667mm"
         viewBox="0 0 211.66667 211.66667"
         version="1.1"
         id="svg3144">

        <g
           id="layer1"
           transform="translate(0.6011076,0.33988789)"
           style="fill:#edd400">
          <rect
             style="fill:#edd400;stroke-width:14.0108"
             id="rect4310"
             width="159.67151"
             height="159.67151"
             x="-0.6011076"
             y="-0.33988789" />
          <text
             id="text4310"
             y="35.886333"
             x="16.87121"
             style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:19.7556px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
             xml:space="preserve">
             <tspan
               style="stroke-width:0.264583"
               id="tspan4300"
               y="35.886333"
               x="16.87121">
               <tspan
                 id="tspan4298"
                 style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:19.7556px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';stroke-width:0.264583"
                 y="35.886333"
                 x="16.87121">
                 {{e.name}}
               </tspan>
             </tspan>
            </text>
          <image
             :xlink:href="e.img"
             y="48.929302"
             x="103.68301"
             width="108.49451"
             height="162.78505"
             preserveAspectRatio="xMidYMin slice"
             id="image4240"
             style="opacity:1;stop-opacity:1" />
          <text
             id="text4316"
             y="198.66023"
             x="12.698348"
             style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#2e3436;fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             xml:space="preserve"><tspan
               style="stroke-width:0.396875"
               id="tspan4314"
               y="198.66023"
               x="12.698348"><tspan
                 id="tspan4312"
                 style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#2e3436;stroke:none;stroke-width:0.396875;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                 y="198.66023"
                 x="12.698348">{{e.desc}}</tspan></tspan></text>
        </g>
      </svg>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Svg',
  components: {
  },
  data() {
    return {
      elements: [
        {name: 'Steakholder', img: 'steakholder.jpg', desc: ':/'},
        {name: 'Moon', img: 'full-moon.jpg', desc: '0_0'},
        {name: 'Vue', img: 'vue_logo.png', desc: ':)'}
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.svg-container {
  margin-bottom: 120px;
}
</style>
