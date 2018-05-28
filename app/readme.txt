/main.js
	启动应用
	
app.component.js
	一个名为AppComponent的可视化组件
		Component方法接受一个包含两个属性的配置对象
		Class方法是我们实现组件本身的地方，在Class方法中我们给组件添加属性和方法，它们会绑定到相应的视图和行为
	模块说明
		(function(app) {
			...
		})(window.app || (window.app = {}));
		
		全局app命名空间对象传入IIFE中，如果不存在就用一个空对象初始化它
	输出了AppComponent
		app.AppComponent =
		
		
app.module.js
	添加 NgModule