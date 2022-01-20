// User auth model
import UserAuth from "../models/userauth/UserAuth"

function routeGuard() {
    const [user, loading, error] = UserAuth.getAuthState()
    return user
}

export default routeGuard