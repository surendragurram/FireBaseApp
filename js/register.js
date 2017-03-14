var texEmail = document.getElementById('texEmail');
var texPassword = document.getElementById('texPassword');
var btnSignUp = document.getElementById('btnSignUp');

btnSignUp.addEventListener('click', function() {
var email = texEmail.value;
var password = texPassword.value;
var auth = firebase.auth();
var promise = auth().createUserWithEmailAndPassword(email,password);

promise.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage + "Code:" + errorCode);
  // ...
     });
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){
		console.log(firebaseUser);
		documnet.location = "index.html";
	}else{
		console.log("not logged in");
	}

});