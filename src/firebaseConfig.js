<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdHj4zIMj3WyqE1HtCNwBHT5Z20lPMV90",
    authDomain: "elev8-ekasi.firebaseapp.com",
    projectId: "elev8-ekasi",
    storageBucket: "elev8-ekasi.appspot.com",
    messagingSenderId: "385029002271",
    appId: "1:385029002271:web:c113fc1f8a4797b21c712a",
    measurementId: "G-0T98BREKS0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>