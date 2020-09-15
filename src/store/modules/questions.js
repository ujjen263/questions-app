import questions from '../../data/questions';

const state = {
	questions: []
};

const mutations = {
	'GET_QUESTIONS' (state,questions) {
		state.questions = questions;
	}
}

const actions = {
	initQuestions: ({commit}) => {
		commit('GET_QUESTIONS', questions);
	}
};

const getters = {
	questions: state => {
		return state.questions;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}