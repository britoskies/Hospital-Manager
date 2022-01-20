// Firebase App
import app from '../../services/firebase/firebase';

// Auth Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const UserAuth = {
    _auth: getAuth(app),

    async authUser(email: string, password: string) {
        signInWithEmailAndPassword(this._auth, email, password)
    },

    getAuthState() {
        return useAuthState(this._auth);
    },

    signOut() {
        this._auth.signOut()
    }
}

export default UserAuth