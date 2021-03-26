(function(modules) {
// The module cache
    // 模块缓存对象
	var installedModules = {};

    // The require function
    // webpack 实现的 require() 函数
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			// no module.id needed
 			// no module.loaded needed
 			exports: {}
 		};
 	
 		// Execute the module function
 		modules[moduleId](module, module.exports, __webpack_require__);
 	
 		// Return the exports of the module
 		return module.exports;
 	}


    // expose the modules object (__webpack_modules__)
    // 将所有的模块挂载到 require() 函数上
	__webpack_require__.m = modules;

    // expose the module cache
    // 将缓存对象挂载到 require() 函数上
	__webpack_require__.c = installedModules;

	// define getter function for harmony exports
	__webpack_require__.d = function(exports, name, getter) {
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};

	// define __esModule on exports
	__webpack_require__.r = function(exports) {
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};

	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};

	// getDefaultExport function for compatibility with non-harmony modules
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};

	// Object.prototype.hasOwnProperty.call
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

	// __webpack_public_path__
	__webpack_require__.p = "";


    // Load entry module and return exports
    // 加载入口模块，并返回模块对象
	return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
    "./src/index.js":(function(module, __webpack_exports__, __webpack_require__) {
       "use strict";
       eval(`
            __webpack_require__.r(__webpack_exports__);
            var _test2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/test2.js");
            function test() {}
            test()
            Object(_test2__WEBPACK_IMPORTED_MODULE_0__["default"])() 
            // # sourceURL=webpack:///./src/index.js?`
       );
   }),
   
   "./src/test2.js": (function(module, __webpack_exports__, __webpack_require__) {
       "use strict";
       eval(`
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "default", function() { return test2; });
            function test2() {}
            //# sourceURL=webpack:///./src/test2.js?
       `);
   })
})


// const obj = {
//     './src/index.js': (module, __webpack_exports__, __webpack_require__) => {
//         eval(
//             `
//                 __webpack_require__.r(__webpack_exports__);
//                 var _test2_WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/test2.js");
//                 function test() {}
//                 test()
//                 Object(_test2__WEBPACK_IMPORTED_MODULE_0__["default"])()
//             `
//         )
//     },
//     "./src/test2.js": (module, __webpack_exports__, __webpack_require__) => {
//         eval(`
//             __webpack_require__.r(__webpack_exports__);
//             __webpack_require__.d(__webpack_exports__, 'default', function() { return test2; });
//             function test2() {}
//         `)
//     }
// }



