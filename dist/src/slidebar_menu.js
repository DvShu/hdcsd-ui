/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * 侧边栏导航插件
	 * 
	 * @author haoran.shu
	 */
		// 构造导航栏对象
		var SlidebarMenu = function(n) {
			initMenu(n); // 初始化菜单
			mouseListener(); // 配置item点击事件

			var slidebarMenu, argsLength, nodes, index, menu, menuNodes, elemNodes;

			/**
			 * 初始化菜单显示
			 */
			function initMenu(n) {
				slidebarMenu = document.getElementById("slidebar-menu");
				argsLength = n.length; // 获取参数数量
				nodes = getElementNodes(slidebarMenu); // 获取所有的元素节点
				index = 0; // 节点级别
				while (index < argsLength) {
					menu = nodes[n[index]];
					if (menu) {
						// 获取当前节点的所有的元素子节点
						menuNodes = getElementNodes(menu);
						menuNodes[0].className = "active"; // 更新<a>样式
						// 如果有下一级菜单，则显示下一级菜单
						if (menuNodes[1]) {
							menuNodes[1].style.display = "block"; // 显示下一级菜单
							nodes = getElementNodes(menuNodes[1]); // 并且下一级菜单的所有元素子节点
						}
					}
					index++;
				}
			}

			// 添加鼠标悬浮和移出事件,显示或隐藏下一级菜单
			function mouseListener() {
				var menuItems = slidebarMenu.querySelectorAll("a");
				var childrens, cssRules;
				for ( var i = 0, length = menuItems.length; i < length; i++) {
					// 通过点击事件切换隐藏与显示
					menuItems[i].onclick = function(event) {
						childrens = this.nextElementSibling; // 获取下一个兄弟节点
						if (childrens) { // 有下一级菜单
							cssRules = getComputedStyle(childrens, null); // 获取节点样式表
							// 如果当前为显示
							if (cssRules.getPropertyValue("display") == "block") {
								// 置为隐藏
								childrens.style.display = "none";
							} else {
								childrens.style.display = "block";
							}
							event.preventDefault(); // 阻止默认事件
						}

					};
				}
			}

			/**
			 * 获取指定节点的所有元素子节点
			 */
			function getElementNodes(node) {
				elemNodes = [];
				nodes = node.childNodes;
				for ( var i = 0, length = nodes.length; i < length; i++) {
					if (nodes[i].nodeType == 1) { // 元素节点
						elemNodes.push(nodes[i]);
					}
				}
				return elemNodes;
			}
		};

		window.slidebarMenu = SlidebarMenu; // 添加侧边栏导航菜单对象

/***/ }
/******/ ]);