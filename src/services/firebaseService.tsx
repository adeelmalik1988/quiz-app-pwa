import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCQOlbDWr1s_m_EMc122CSeOT4sumb2ldg",
    authDomain: "quizapppwa.firebaseapp.com",
    databaseURL: "https://quizapppwa.firebaseio.com",
    projectId: "quizapppwa",
    storageBucket: "quizapppwa.appspot.com",
    messagingSenderId: "302344526500",
    appId: "1:302344526500:web:4f770820dc9bcfac6ee431"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()



export const initNotification = ()=> {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log(currentToken)
          
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
          
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
 
          });

        }

})
}