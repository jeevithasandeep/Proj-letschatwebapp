
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdL5daagtsUyxwRSmBywGIyPn4Kxe7xSY",
  authDomain: "letschat-5aa7e.firebaseapp.com",
  databaseURL: "https://letschat-5aa7e-default-rtdb.firebaseio.com",
  projectId: "letschat-5aa7e",
  storageBucket: "letschat-5aa7e.appspot.com",
  messagingSenderId: "1055950788111",
  appId: "1:1055950788111:web:5dfc4a7fc1fe92cb1a357a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

/*function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitterpage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitterpage.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}*/
