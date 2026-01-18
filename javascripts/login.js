const firebaseConfig = {
    apiKey: "AIzaSyCCIqvliY3EnTgPKXtgNE8YMG5uk4UuIRE",
    authDomain: "fusion-fc-da20e.firebaseapp.com",
    projectId: "fusion-fc-da20e",
    storageBucket: "fusion-fc-da20e.firebasestorage.app",
    messagingSenderId: "454548156450",
    appId: "1:454548156450:web:2264b91e9bb7a8f1e75a7b",
    measurementId: "G-TFV6PK4B67"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("login").addEventListener('click', (e) => {
    var docRef = db.collection("players").doc(document.getElementById("username").value);

    docRef.get().then((doc) => {
        if (doc.exists) {
            if(doc.data().Password == document.getElementById("password").value){
                window.localStorage.setItem("userInfo",JSON.stringify(doc.data()))
                window.location.assign("../pages/dahboard.html");
            }else{
                window.alert("Invalid password")
            }
        } else {
            window.alert("Invalid Username\nContact 862-849-8666 for a change");
        }
    }).catch((error) => {
        window.alert("Invalid Username\nContact at 862-849-8666 for a change");
    });
})