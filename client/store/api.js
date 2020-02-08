export const state = () => ({
    cache: {}
});

export const getters = {
    get: (state) => (endpoint) => {
        console.log(`CACHE.GET => ${endpoint}`)
        return state.cache[endpoint];
    }
}

export const mutations = {
    setData: (state, {endpoint, data}) => {
        console.log(`CACHE.SET ${endpoint}`);
        state.cache[endpoint] = data;
    }
}

export const actions = {
    assertHas({commit, state}, {app, endpoint}) {
        console.log(`CACHE.ASSERT => ${endpoint}`);
        if(!state.hasOwnProperty(endpoint)) {
            console.log(`CACHE.MISS => ${endpoint}`);
            let token = app.$auth.getToken('github');
            return app.$axios.get(
                `https://api.github.com/${endpoint}`,
                {
                    headers: {
                        'Authorization': token,
                    }
                }
            ).then(res => {
                console.log(`CACHE.FIND => ${endpoint}`);
                commit('setData', {endpoint, data: res.data})
            });
        } else {
            console.log(`CACHE.HIT => ${endpoint}`);
        }
    }
};