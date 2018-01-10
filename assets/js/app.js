$( document ).ready(function() {
})
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdK7laKVDh6CC4E9yNT_YEHu1wL5JO5-8",
  authDomain: "hackathon-32c71.firebaseapp.com",
  databaseURL: "https://hackathon-32c71.firebaseio.com",
  projectId: "hackathon-32c71",
  storageBucket: "hackathon-32c71.appspot.com",
  messagingSenderId: "194945642297"
};
firebase.initializeApp(config);

//función de ingreso con googleapis

function GoogleSignUp(){
//  if (!firebase.auth().currentUser){  //para saber si el usuario se ha conectado
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(provider);
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user);
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var credencial = error.credencial;
      console.log(errorCode);
      if(errorCode === 'auth/account-exists-with-different-credential'){
        alert('Es el mismo usuario');
      }
    });
  //}else{
  //  firebase.auth().signOut();
  //}
}
document.getElementById('btnsignUp').addEventListener('click',GoogleSignUp, false);
