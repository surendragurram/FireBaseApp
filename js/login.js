var texEmail = document.getElementById('texEmail');
var texPassword = document.getElementById('texPassword');
var btnSignIn = document.getElementById('btnSignIn');
var btnSignOut = document.getElementById('btnSignOut');



btnSignIn.addEventListener('click', function() {

var email = texEmail.value;
var password = texPassword.value;
var auth = firebase.auth();
var promise = auth().signInWithEmailAndPassword(email, password);

promise.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage + "Code:" + errorCode);
  // ...
     });
});

btnSignOut.addEventListener('click', function() {
	firebase.auth().SignOut();

});


firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		btnSignOut.classList.remove('hide');
        btnSignIn.classList.add('hide');
        btnSignUp.classList.add('hide');
        texEmail.classList.add('hide');
        texPassword.classList.add('hide');
}else{
	console.log("not logged in");
        btnSignOut.classList.add('hide');
        btnSignIn.classList.remove('hide');
        btnSignUp.classList.remove('hide');
        texEmail.classList.remove('hide');
        texPassword.classList.remove('hide');

}

});
