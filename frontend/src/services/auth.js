import  {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase';

export const signUp = (email, password) => {
    const res = createUserWithEmailAndPassword(auth, email, password);
    return res.user;
};

export const signIn = (email, password) => {
    const res = signInWithEmailAndPassword(auth, email, password);
    return res.user;
};

export const logOut = () => {
    return signOut(auth);
};
