import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';


export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignnedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
                success: true,
            }
            return signedInUser;

        })
        .catch(err => {
            console.log(err);
            console.log(err.massage);
        })
}





export const handleFbLogin = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function (result) {

        var token = result.credential.accessToken;

        var user = result.user;
        user.success = true;
        return user;

    }).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;

    });
}


export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignnedIn: false,
                name: '',
                email: '',
                photoURL: '',
                error: '',
                success: false,
            }
            return signedOutUser;
        })
        .catch(err => {

        })
}


export const CreateUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
            updateUserName(name)
            return newUserInfo;
        })
        .catch(error => {

            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;

        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
            return newUserInfo;
        })


        .catch(error => {

            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;

        });
}



const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
}





