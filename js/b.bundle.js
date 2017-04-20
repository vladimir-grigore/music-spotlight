/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

$(document).ready(function(){
  var nodes = null;
  var edges = null;
  var network = null;

  var LENGTH_MAIN = 350,
      LENGTH_SERVER = 150,
      LENGTH_SUB = 50,
      WIDTH_SCALE = 2,
      GREEN = 'green',
      RED = '#C5000B',
      ORANGE = 'orange',
      //GRAY = '#666666',
      GRAY = 'gray',
      BLACK = '#2B1B17';

  // Called when the Visualization API is loaded.

  // Create a data table with nodes.
  nodes = [];

  // Create a data table with links.
  edges = [];

  nodes.push({
      id: 1,
      label: 'ABBA',
      group: 'switch',
      value: 10
  });
  nodes.push({
      id: 2,
      label: 'Metallica',
      group: 'switch',
      value: 8
  });
  nodes.push({
      id: 3,
      label: 'Rammstein',
      group: 'switch',
      value: 6
  });
  nodes.push({
      id: 4,
      label: 'SPOTIFY',
      group: 'switch',
      value: 6
  });
  edges.push({
      from: 1,
      to: 4,
      length: LENGTH_MAIN,
      width: WIDTH_SCALE * 6,
      label: '0.71 mbps'
  });
  edges.push({
      from: 1,
      to: 2,
      length: LENGTH_MAIN,
      width: WIDTH_SCALE * 6,
      label: '0.71 mbps'
  });
  edges.push({
      from: 1,
      to: 3,
      length: LENGTH_MAIN,
      width: WIDTH_SCALE * 4,
      label: '0.55 mbps'
  });

  // group around 2
  for (var i = 90; i <= 104; i++) {
      var value = 1;
      var width = WIDTH_SCALE * 2;
      var color = GRAY;
      var label = null;

      if (i === 103) {
          value = 5;
          width = 3;
      }
      if (i === 102) {
          color = RED;
          label = 'error';
      }

      nodes.push({
          id: i,
          label: '192.168.0.' + i,
          group: 'desktop',
          value: value
      });
      edges.push({
          from: 2,
          to: i,
          length: LENGTH_SUB,
          color: color,
          fontColor: color,
          width: width,
          label: label
      });
  }
  nodes.push({
      id: 201,
      label: '192.168.0.201',
      group: 'desktop',
      value: 1
  });
  edges.push({
      from: 2,
      to: 201,
      length: LENGTH_SUB,
      color: GRAY,
      width: WIDTH_SCALE
  });

  // group around 3
  nodes.push({
      id: 202,
      label: '192.168.0.202',
      group: 'desktop',
      value: 4
  });
  edges.push({
      from: 3,
      to: 202,
      length: LENGTH_SUB,
      color: GRAY,
      width: WIDTH_SCALE * 2
  });
  for (var i = 210; i <= 235; i++) {
      nodes.push({
          id: i,
          label: '192.168.0.' + i,
          group: 'mobile',
          value: 2
      });
      edges.push({
          from: 3,
          to: i,
          length: LENGTH_SUB,
          color: GRAY,
          fontColor: GRAY,
          width: WIDTH_SCALE
      });
  }
  for (var i = 410; i <= 435; i++) {
      nodes.push({
          id: i,
          label: 'Spotify.' + i,
          group: 'mobile',
          value: 2
      });
      edges.push({
          from: 4,
          to: i,
          length: LENGTH_SUB,
          color: GREEN,
          fontColor: GRAY,
          width: WIDTH_SCALE
      });
  }
  // group around 1
  nodes.push({
      id: 10,
      label: '192.168.0.10',
      group: 'server',
      value: 10
  });
  edges.push({
      from: 1,
      to: 10,
      length: LENGTH_SERVER,
      color: GRAY,
      width: WIDTH_SCALE * 6,
      label: '0.92 mbps'
  });
  nodes.push({
      id: 11,
      label: '192.168.0.11',
      group: 'server',
      value: 7
  });
  edges.push({
      from: 1,
      to: 11,
      length: LENGTH_SERVER,
      color: GRAY,
      width: WIDTH_SCALE * 3,
      label: '0.68 mbps'
  });
  nodes.push({
      id: 12,
      label: '192.168.0.12',
      group: 'server',
      value: 3
  });
  edges.push({
      from: 1,
      to: 12,
      length: LENGTH_SERVER,
      color: RED,
      width: WIDTH_SCALE,
      label: '0.3 mbps'
  });

  nodes.push({
      id: 204,
      label: 'Vlad',
      group: 'internet',
      value: 10
  });
  edges.push({
      from: 1,
      to: 204,
      length: 200,
      width: WIDTH_SCALE * 3,
      label: '0.63 mbps'
  });


  // legend
  // var mynetwork = document.getElementById('network');
  // var x = -mynetwork.clientWidth / 2 + 50;
  // var y = -mynetwork.clientHeight / 2 + 50;
  // var step = 70;

  // create a network
  var container = document.getElementById('network');
  var data = {
      nodes: nodes,
      edges: edges
  };
  var options = {
      nodes: {
          scaling: {
              min: 16,
              max: 32
          }
      },
      edges: {
          color: GRAY,
          smooth: false
      },
      physics: {
          barnesHut: {
              gravitationalConstant: -30000
          },
          stabilization: {
              iterations: 2500
          }
      },
      groups: {
          'switch': {
              shape: 'dot',
              color: '#FF9900' // orange
          },
          desktop: {
              shape: 'dot',
              color: "#2B7CE9" // blue
          },
          mobile: {
              shape: 'dot',
              color: "#5A1E5C" // purple
          },
          server: {
              shape: 'dot',
              color: "#C5000B" // red
          },
          internet: {
              shape: 'dot',
              color: "#109618" // green
          }
      }
  };
  network = new vis.Network(container, data, options);
});

/***/ })

/******/ });
//# sourceMappingURL=b.bundle.js.map