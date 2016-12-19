window.onload = function(){
	Vue.component('demo-grid',{
		template: '#grid-template',
		props: {
			data: Array,
			columns: Array
		}
	});
		
	var demo = new Vue({
		el: '#demo',
		data: {
			gridColumns: ['name', 'power'],
			gridData: [
				{name: 'jack', power: 9000}
			]
		}
	});
};