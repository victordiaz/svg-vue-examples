import Vue from 'vue'
import Router from 'vue-router'
import HowToAddSvg from './components/SvgExamples/1_HowToAddSvg.vue'
import Text from './components/SvgExamples/2_Text.vue'
import TextOnPath from './components/SvgExamples/3_TextOnPath.vue'
import ModifySvg from './components/SvgExamples/4_ModifySvg.vue'
import BarChart from './components/SvgExamples/5_BarChart.vue'
import Mockups from './components/SvgExamples/6_Mockups.vue'
import Clipping from './components/SvgExamples/7_Clipping.vue'
import TextTwo from './components/SvgExamples/TextTwo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/svg/howtoaddsvg',
      component: HowToAddSvg
    },
    {
      path: '/svg/text',
      component: Text
    },
    {
      path: '/svg/textonpath',
      component: TextOnPath
    },
    {
      path: '/svg/modifysvg',
      component: ModifySvg
    },
    {
      path: '/svg/barchart',
      component: BarChart
    },
    {
      path: '/svg/mockups',
      component: Mockups
    },
    {
      path: '/svg/clipping',
      component: Clipping
    },
    {
      path: '/svg/texttwo',
      component: TextTwo
    },
  ]
})
