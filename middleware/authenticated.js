export default function ({ store, redirect }) {
    
    if (!store.state.test.authenticated) {
        return redirect('/login')
    }
}