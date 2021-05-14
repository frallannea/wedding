// Handle login to firebase request
function loginToFirebase() {
  var data = {
    email: document.getElementById("myLoginEmail").value,
    password: document.getElementById("myLoginPassword").value
  }
  firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  .then(function(authData) {
    auth = authData;
    console.log("Login Successful!");
    // Login data was provided through modal. Close it:
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  })
  .catch(function(error) {
    console.log("Login Failed!", error);
  });
}

// Handle logout from firebase request
function logoutFromFirebase() {
  firebase.auth().signOut()
  console.log("Logged out!");
}

// Depending on login status, display or not specific parts of the page
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // var element = document.getElementById("mainDiv");
    // element.style.display = "block";

    // frobino: this should be done (see which components are flagged auth-false/true in html)
    // $('body').removeClass('auth-false').addClass('auth-true'); // jQuery equivalent
    var myBody = document.getElementById("myBody");
    myBody.classList.remove('auth-false');
    myBody.classList.add('auth-true');

  } else {
    // User is signed out.
    // var element = document.getElementById("mainDiv");
    // element.style.display = "none";

    // $('body').removeClass('auth-true').addClass('auth-false'); // jQuery equivalent
    var myBody = document.getElementById("myBody");
    myBody.classList.remove('auth-true');
    myBody.classList.add('auth-false');
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal ("Login" button)
var loginBtn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the login button, open the modal
loginBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the button that opens the modal
var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.onclick = logoutFromFirebase