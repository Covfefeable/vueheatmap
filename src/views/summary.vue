<template>
    <div class="heatMapDom">
        <div :class="className" :id="id" :style="{height:height,width:width}" />
    </div>
</template>


<script>
import echarts from 'echarts/lib/echarts'
import option from './option'
require('echarts/extension/bmap/bmap')
 
export default {
  props: {
    className: {
      type: String,
      default: 'heatMapCss'
    },
    id: {
      type: String,
      default: 'heatMap'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '95vh'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.chart = echarts.init(document.getElementById(this.id))
      console.log(option, '数据')
      this.chart.setOption(option)
    }
  }
}
</script>
<style>
.heatMapDom{
  width: 100%;
  height: 600px;
  margin: 0;
  padding: 0;
}
.BMap_noprint,.anchorBL{
  display: none;
}
</style>