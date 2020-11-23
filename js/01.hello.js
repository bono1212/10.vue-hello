new Vue({
	el: "#app",
	data: {
		title: 'Hello Vue~~~',
		username: 'bono',
		x: '',
		y: '',
		z: ''
	},
	methods: {
		onSum() {
			this.z = Number(this.x) + Number(this.y);		
		}
		},
		onReset() {
			this.x = this.y = this.z = '';
		}
});