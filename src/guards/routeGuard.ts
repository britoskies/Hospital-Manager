// User auth model
import UserAuth from "../models/userauth/UserAuth"

function routeGuard() {
    const [user, loading, error] = UserAuth.getAuthState()
    // if(!loading) {
    //     console.log('ended loading', user)
    //     return user ? true : false
    // }
    //console.log('loading...', user)

    return [user, loading]

}

export default routeGuard