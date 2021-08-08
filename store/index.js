

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

export const actions =  {
	runView(context, payload) {
		context.commit('runView', payload)
	},
	stopView(context, payload) {
		context.commit('stopView', payload)
	}
}

export const getters = {
	developerView(state) {
		return state.views.developer;
	}
}
