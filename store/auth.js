export const state = () => ({
    authenticated: false
})
export const mutations = {
    login(state, { email, password }) {
        try {
            if (email === "test@test.com" && password === "password") {
                state.authenticated = true;
            }
        } catch (error) {
            console.error(error)
        } finally {
            this.$router.push('/')
        }
    }
}
// export const actions = {
   
// }

export const getters = {
    getAuthenticatedState(state) {
        return state.authenticated
    }
}