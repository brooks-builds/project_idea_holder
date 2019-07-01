export const store = {
    state: {
        user: {
            email: null,
            name: null,
            id: null
        }
    },
    mutations: {
        setUser(state, { email, id, name }) {
            state.user.email = email;
            state.user.id = id;
            state.user.name = name;
        }
    }
};
