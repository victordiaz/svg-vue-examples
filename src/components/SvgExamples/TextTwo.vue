<template>
  <div class="svg-container">
    <svg
   id="svg1988"
   version="1.1"
   :viewBox="vBox"
   height="200px"
   width="20px">
  <g
     id="layer1">
    <path
       d="M 36.733311,6.9634523 H 107.78151 V 78.011647 H 36.733311"
       style="fill:#1a1a1a;fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-opacity:1"
       id="rect2555" />
    <text
       id="text2553"
       y="56.453064"
       x="6.9910388"
       style="font-style:normal;font-weight:normal;font-size:39.2876px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.982192"
       xml:space="preserve"><tspan
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:'Roboto Condensed';-inkscape-font-specification:'Roboto Condensed, Bold';fill:#ff0000;stroke-width:0.982192"
         y="56.453064"
         x="6.9910388"
         id="tspan2551">HOLA</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.7498px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.268746"
       id="text2606"><textPath
         id="textPath2619"
         xlink:href="#rect2555"><tspan
           style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:'Roboto Condensed';-inkscape-font-specification:'Roboto Condensed, Bold';fill:#ff0000;stroke-width:0.268746"
           id="tspan2604">HOLA que tal estamos aqui</tspan></textPath></text>
  </g>
</svg>

  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Svg',
  data() {
    return {
      msg: 'Hola',
      vBox: '10 0 110 107',
      incr: 0
    }
  },
  methods: {
    animate() {
      requestAnimationFrame(() => {
        this.msg = 'Que tal?'
        console.log('hola')

        // let x = 10 + Math.random() * 5
        // let y = -10 + Math.random() * 5
        let x = 10 * Math.cos(2 * Math.PI * this.incr)
        let y = 10 * Math.sin(2 * Math.PI * this.incr)
        this.incr += 0.01

        let w = 110 + x

        this.vBox = `${x} ${y} ${w} 107`
        this.animate()
      })
    }
  },
  mounted () {
    this.animate()
  }
}
</script>

<style lang="scss" scoped>
#text {
  font-style:normal;
  font-variant:normal;
  font-weight:bold;
  font-stretch:normal;
  font-family:sans-serif;
  fill:#000000;
  fill-opacity:1;
  stroke-width:1.50000004;
  font-size:25.4px;
  stroke:#00dfeb;
  stroke-opacity:1;
  stroke-miterlimit:4;
  stroke-dasharray:9.00000025,9.00000025;
  stroke-dashoffset:0;
  transition: all 300ms;
}

#text:hover {
  stroke-dashoffset:10;
  stroke-width:10;
}

</style>
