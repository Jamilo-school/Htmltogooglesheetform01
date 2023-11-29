 // Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAAZth-6D9NNdi3fu58ZYIYsdfxXKIOPT4",
    authDomain: "online-registration-form-1e3e0.firebaseapp.com",
    projectId: "online-registration-form-1e3e0",
    storageBucket: "online-registration-form-1e3e0.appspot.com",
    messagingSenderId: "600551728576",
    appId: "1:600551728576:web:b352fa2c6ae9fd18eb9425",
    measurementId: "G-53J4STTVN0"
  };
        

       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
       const db = firebase.firestore();

       // Function to save data to Firebase
       function saveDataToFirebase(data) {
           return db.collection('registered_learners').doc(data['Admission No']).set(data);
       }

       // Function to retrieve registered learners' data from Firebase and update table
       function retrieveRegisteredLearnersFromFirebase() {
           const tableBody = document.querySelector('#learnerTable tbody');
           tableBody.innerHTML = ''; // Clear existing table data

           db.collection('registered_learners').get()
               .then((querySnapshot) => {
                   querySnapshot.forEach((doc) => {
                       const data = doc.data();
                       // Create table rows for each learner
                       const row = `<tr>
                           <td>${data.StudentFullName}</td>
                           <td>${data['Admission No']}</td>
                           <!-- Add more table cells for other data -->
                       </tr>`;
                       tableBody.innerHTML += row;
                   });
               })
               .catch((error) => {
                   console.error('Error getting documents: ', error);
               });
       }

       document.addEventListener('DOMContentLoaded', function() {
           const form = document.getElementById('registrationForm');

           form.addEventListener('submit', function(event) {
               event.preventDefault();

               const formData = new FormData(form);
               const data = {};
               formData.forEach((value, key) => {
                   data[key] = value;
               });

               saveDataToFirebase(data)
                   .then(() => {
                       Swal.fire({
                           icon: 'success',
                           title: 'Success!',
                           text: 'Data has been saved successfully.',
                       });
                       form.reset();
                       retrieveRegisteredLearnersFromFirebase(); // Fetch and display data after submission
                   })
                   .catch((error) => {
                       Swal.fire({
                           icon: 'error',
                           title: 'Error!',
                           text: 'Failed to save data. Please try again.',
                       });
                       console.error('Error writing document: ', error);
                   });
           });

           // Initial data retrieval on page load
           retrieveRegisteredLearnersFromFirebase();
       });