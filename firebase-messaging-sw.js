// 1. Import Firebase libraries into the background worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// 2. Initialize Firebase with your exact Trim Key config
firebase.initializeApp({
  apiKey: "AIzaSyAd0HAZ6-hLPdnU3rMsghqWKBc0z6ca68w",
  authDomain: "ed-trim-key.firebaseapp.com",
  projectId: "ed-trim-key",
  storageBucket: "ed-trim-key.firebasestorage.app",
  messagingSenderId: "1078045852332",
  appId: "1:1078045852332:web:95b0deb2bbe6a902069509"
});

// 3. Start the Messaging Background Engine
const messaging = firebase.messaging();

// 4. Handle incoming messages when the dashboard tab is closed/minimized
messaging.onBackgroundMessage(function(payload) {
  console.log('[Service Worker] Received background message: ', payload);
  
  const notificationTitle = payload.notification.title || "Trim Key System";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://wjvoetdkkggyhtcoqqcj.supabase.co/storage/v1/object/public/Ed%20Trim%20Key/TRIM%20KEY%20FAVICON.png', // Brand Logo
    badge: 'https://wjvoetdkkggyhtcoqqcj.supabase.co/storage/v1/object/public/Ed%20Trim%20Key/TRIM%20KEY%20FAVICON.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});