<template>
  <div>
    <div class = "svg-container">

      <svg
        viewBox="0 0 100% 100%"
        height="500px"
        width="500px">
        <g id="layer1">
          <text
            id="text"
            y="58.119045"
            x="32.505951"
            >
            {{msg}}
          </text>
          <g v-for="i in 10" :key="i" :transform="`scale(1, 2) translate(${i * 30}, 0)`">
            <path
              d="m 47.469567,210.69169 -16.434583,-8.32419 -16.174282,8.81931 2.838204,-18.20253 -13.385789,-12.65734 18.18869,-2.9256 7.901409,-16.64197 8.403024,16.39441 18.269129,2.37203 -12.995335,13.0579 z"
              id="path4579"
              style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.5;stroke-miterlimit:4;stroke-dasharray:9.00000014, 9.00000014;stroke-dashoffset:1.13385832;stroke-opacity:1" />
          </g>
        </g>

          <image xlink:href="/path/to/image.jpg" width="100%" height="100%" x="0" y="0" />
      </svg>

    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Svg',
  data() {
    return {
      msg: 'Hola'
    }
  },
  mounted () {
    setTimeout((e) => {
      this.msg = 'aloH'
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>

.svg {
  border: 1px solid yellow;
  height: 0;
  padding-top: 100%;
  position: relative;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

#text {
  font-style:normal;
  font-variant:normal;
  font-weight:bold;
  font-stretch:normal;
  font-family:sans-serif;
  fill:#000000;
  fill-opacity:1;
  stroke-width:1.50000004;
  font-size:3em;
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
