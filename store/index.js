

export const state = () => ({
	views: {
		developer: false
	}
});

export const mutations = {
	runView(state, payload) {
		state.views[payload.view] = true;
	},
	stopView(state, payload) {
		state.views[payload.view] = false;
	}
}

export const getters = {
	developerView(state) {
		return state.views.developer;
	}
}
