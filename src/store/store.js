import Vue from 'vue';
import Vuex from 'vuex';

import questions from './modules/questions';

import * as actions from './action';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	modules: {
		questions
	}
});