<template>
  <div id="app">
    <div id="nav">
      <ol>
        <li><router-link to="/svg/howtoaddsvg">How to Add SVG</router-link></li>
        <li><router-link to="/svg/text">Text</router-link></li>
        <li><router-link to="/svg/textonpath">Text on path</router-link></li>
        <li><router-link to="/svg/modifysvg">Modify Svg</router-link></li>
        <li><router-link to="/svg/barchart">Bar Chart</router-link></li>
        <li><router-link to="/svg/mockups">Mockups</router-link></li>
        <li><router-link to="/svg/clipping">Clipping</router-link></li>
      </ol>
    </div>
    <router-view class = "content" />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oleo+Script|Open+Sans+Condensed:300,700&display=swap');

* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  min-height: 100vh;
  display: flex;
  background: white;
}

#nav {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  box-shadow: 0 0 5px 0px #fca582;
  padding: 20px;
  height: 100%;
  position: sticky;
  top: 20px;

  h1 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  ol {
    text-align: left;
    text-decoration: none;
    list-style-position: inside;
  }

  a {
    text-decoration: none;
    font-weight: 800;

    &:hover {
      color: blue;
    }
  }
}

.content {
  padding: 20px;
  margin: 0 auto;
  min-width: 200px;
  max-width: 500px;
}

section {
  margin: 50px 0;
}

.svg-container {
  border: 1px solid yellow;
  height: 0;
  padding-top: 100%;
  position: relative;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

</style>
