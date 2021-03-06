function saveToFirebase() {
    var email = document.getElementById("inputEmail").value;

    // create json object
    var emailObject = {
        email: email
    };

    var db = database;
    var reference = db.ref('subscription-entries');

    /*
     * Use the global firebase object to connect to your realtime database.
     * We have a reference to a new child ‘subscription-entries’
     * (if the child doesn’t exist, firebase will make it on the fly).
     * We use the push() method to create a new record in the ‘subscription-entries’ child.
     * If we didn’t do this then we would be overwriting the same record over and over again,
     * push() creates a new child as a unique id, and then we are setting our emailObject
     * as the data to fill that record.
     *
     * NOTE: the same mail can be recorded multiple times under different id.
     */
    reference.push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

function saveRsvpFormToFirebase() {
    var user = firebase.auth().currentUser;

    if (user) {
        var userEmail = user.email;
        var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
        
        var userContact = document.getElementById("userContact").value;
        var userBusAnswer = _getSelectedRadio("busAnswer");
        var userAnswer = _getSelectedRadio("answer");
        var userComments = document.getElementById("rsvpFormControlTextarea1").value;

        // create json object
        var rsvpObject = {
            email: userContact,
            busAnswer: userBusAnswer,
            answer: userAnswer,
            comments: userComments
        };
        var db = database;
        var reference = db.ref('rsvp/' + name);
        reference.set(rsvpObject)
    } else {
        console.log('error in retrieving user');
    }
}

function saveTranspFormToFirebase() {
    var user = firebase.auth().currentUser;

    if (user) {
        var userEmail = user.email;
        var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
        
        var userBusToAnswer = _getSelectedRadio("ToAnswer");
        var userBusBackAnswer = _getSelectedRadio("BackAnswer");

        // create json object
        var trasportObject = {
            busToAnswer: userBusToAnswer,
            busBackAnswer: userBusBackAnswer
        };
        var db = database;
        var reference = db.ref('transport/' + name);
        reference.set(trasportObject)
    } else {
        console.log('error in retrieving user');
    }
}

function _getSelectedRadio(radioName){
    radios = document.getElementsByName(radioName);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          return radios[i].value;
        }
    }
    return null;
}

function readFromFirebase(){
    var db = database;
    var reference = db.ref('subscription-entries');
    reference.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val().email;
            console.log(`Subscriber ${childKey}: ${childData}`);
        });
      });
}

function readFromFirebaseParam(refToQuery, divToFill){
    var db = database;
    var reference = db.ref(refToQuery);
    reference.once('value', function(retrievedText) {
        console.log(retrievedText);
        var realRetrievedText = retrievedText.val();
        console.log(realRetrievedText);
        var div = document.getElementById(divToFill);
        div.innerHTML += realRetrievedText;
      });
}

function readFromFirebasePicParam(refToQuery, imgIdToFill){
    var db = database;
    var reference = db.ref(refToQuery);
    reference.once('value', function(retrievedImgSrc) {
        var realRetrievedImgSrc = retrievedImgSrc.val();
        var img = document.getElementById(imgIdToFill);
        img.src = realRetrievedImgSrc;
      });
}
// document.getElementById("myImg").src = "hackanm.gif";