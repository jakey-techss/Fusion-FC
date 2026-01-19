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
const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
document.title = userInfo.Username;
document.getElementById("userName").innerHTML = userInfo.Name.charAt(0) + userInfo.Name.charAt(userInfo.Name.indexOf(" ") + 1)
document.getElementById("ovrTitle").innerHTML = userInfo.OVR
if (!userInfo.Manager) {
    document.getElementById("manage").style.display = "none";
}
document.getElementById("id").innerText = userInfo.Manager ? "Manager" : "Player"