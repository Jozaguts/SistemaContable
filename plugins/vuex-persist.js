import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            /* your options */
            key: 'authenticated',
            reducer: (state) => state.test.authenticated
        }).plugin(store);
    });
}