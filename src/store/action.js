import Vue from 'vue';

export const loadData = ({commit}) => {
	Vue.http.get('.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
		//console.log(data);
		const resultArray = [];
		for(let key in data) {
			resultArray.push(data[key]);
		}
		//this.questions = resultArray;
		commit('GET_QUESTIONS', resultArray);
	});
};