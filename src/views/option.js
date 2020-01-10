import geoData from './geoinfo'

var convertData = function (data, n) {
  var res = [];

  console.log(res)
  for(let i = 0; i < data.length; i++){
    res[i] = [];
    res[i].push(Number(data[i].lastseenlongitude) + 0.0115); // 实测坐标有偏移，此处进行修正
    res[i].push(Number(data[i].lastseenlatitude) + 0.003);
    res[i].push(n);
  }
  return res
}
var title = 'xxx分布热力图'
var bmap = {
  center: [113.5423000000,22.3632500000]
}
var timeline = {
  autoPlay: false,
  data: ['2019']
}
var options = [{
    series: [{
      data: convertData(geoData.data, 300)
    }]
  }]

export default {
  baseOption: {
    title: {
      text: title,
      left: 'center',
      top: 10,
      textStyle: {
        color: '#66b1ff',
        fontSize: 20,
        fontWeight: 'bolder'
      }
    },
    timeline: {
      bottom: 10,
      autoPlay: timeline.autoPlay,
      data: timeline.data,
      axisType: 'category',
      padding: [5, 5, 5, 5],
      playInterval: 1500,
      lineStyle: {
        color: 'white'
      },
      controlPosition: 'right',
      controlStyle: {
        color: '#ffffff',
        borderColor: '#ffffff'
      },
      label: {
        normal: {
          textStyle: {
            color: 'white',
            fontSize: 13,
            fontWeight: 'bolder'
          }
        }
      }
    },
    bmap: {
      center: bmap.center,
      zoom: 16,
      roam: true,
      mapStyle: {
        styleJson: [{
            'featureType': 'land', // 调整土地颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#081734'
            }
          },
          {
            'featureType': 'building', // 调整建筑物颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#04406F'
            }
          },
          {
            'featureType': 'building', // 调整建筑物标签是否可视
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'highway', // 调整高速道路颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#015B99'
            }
          },
          {
            'featureType': 'highway', // 调整高速名字是否可视
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'arterial', // 调整一些干道颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#003051'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': {
              'color': '#044161'
            }
          },
          {
            'featureType': 'subway', // 调整地铁颜色
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#003051'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'all', // 调整所有的标签的边缘颜色
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#313131'
            }
          },
          {
            'featureType': 'all', // 调整所有标签的填充颜色
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#FFFFFF'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -65
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'lightness': -40
            }
          },
          {
            'featureType': 'boundary',
            'elementType': 'geometry',
            'stylers': {
              'color': '#8b8787',
              'weight': '1',
              'lightness': -29
            }
          }
        ]
      }
    },
    visualMap: {
      min: 0,
      max: 300,
      splitNumber: 5,
      inRange: {
        color: ['blue', 'green', 'yellow', 'red']
      },
      textStyle: {
        color: '#fff',
        fontWeight: 'bolder'
      },
      bottom: 10,
      left: 'right',
      right: 20
    },
    series: [{
      type: 'heatmap',
      mapType: 'world',
      coordinateSystem: 'bmap',
      blurSize: 1,
      pointSize: 5,
    }]
  },
  options: options
}
