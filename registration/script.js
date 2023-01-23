const firebaseConfig = {
    apiKey: "AIzaSyCCY6eS7ZwBLBcoD_KVQuUM77cNnke1DZM",
    authDomain: "form-81805.firebaseapp.com",
    databaseURL: "https://form-81805-default-rtdb.firebaseio.com",
    projectId: "form-81805",
    storageBucket: "form-81805.appspot.com",
    messagingSenderId: "990176643145",
    appId: "1:990176643145:web:991211477996962c355798",
    measurementId: "G-6VYY2QLJSY"
  };


  firebase.initializeApp(firebaseConfig);


  var contactFormDB = firebase.database().ref("contactForm");


  document.getElementById("contactForm").addEventListener("submit", submitForm);



  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var opinion=getElementVal("opinion");
  
    saveMessages(name, emailid, msgContent,opinion);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent,opinion) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      opinion : opinion,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  