importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAd0HAZ6-hLPdnU3rMsghqWKBc0z6ca68w",
  authDomain: "ed-trim-key.firebaseapp.com",
  projectId: "ed-trim-key",
  storageBucket: "ed-trim-key.firebasestorage.app",
  messagingSenderId: "1078045852332",
  appId: "1:1078045852332:web:95b0deb2bbe6a902069509",
  measurementId: "G-3DD3QG763J"
});

const messaging = firebase.messaging();

// 🔥 BACKGROUND HANDLER
messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/favicon.ico" // optional
    }
  );
});
