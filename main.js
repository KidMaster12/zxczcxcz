import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
      apiKey: "AIzaSyCPv28imVHx5bA9tF6vyf2LdLv-Ylp-YD8",
      authDomain: "kiwwiter.firebaseapp.com",
      projectId: "kiwwiter",
      storageBucket: "kiwwiter.appspot.com",
      messagingSenderId: "771420928514",
      appId: "1:771420928514:web:c51c688d0bc4aba37fc51b",
      measurementId: "G-XZ0M2SMMP9"
    };

function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

function addroom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).updata({
         purpose : "adding room name"
      });

         localStorage.setItem("room_name" , Room_name);

         window.location = "kwitter_page.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" oneclick='redirectToRoomName(This.id)' >#" + Room_names  +"</div><hr>";
      document.getElementById("outrput").innerHTML += row
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "indes.html";
}    
