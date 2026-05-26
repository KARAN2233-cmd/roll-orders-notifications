importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey            : 'PASTE_API_KEY',
  authDomain        : 'PASTE_AUTH_DOMAIN',
  projectId         : 'PASTE_PROJECT_ID',
  storageBucket     : 'PASTE_STORAGE_BUCKET',
  messagingSenderId : 'PASTE_SENDER_ID',
  appId             : 'PASTE_APP_ID'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body  : payload.notification.body,
      icon  : 'https://i.imgur.com/8vPMBhQ.png',
      badge : 'https://i.imgur.com/8vPMBhQ.png',
      requireInteraction: true
    }
  );
});
