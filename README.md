<h1 align="center">Angular Firebase Poc :volcano:</h1>
<p align="center">
  <img src="./src/assets/angular-firebase.png" alt="Angular and Fireship icons">
</p>

## In this poc is used:
- [Angular 9](https://angular.io/);
- [Firebase](https://firebase.google.com/?hl=pt-br);

## Configs needed:
You need to add your configs of firebase on `enviroments.ts`, for this you need to create a app web in official [site](https://firebase.google.com/?hl=pt-br), go in configs and get your `Firebase SDK snippet`, you estructure is basically this: 
```
var firebaseConfig = {

	apiKey: "AIzaSyBziQPSMoC5ue-C9YSCSFk1xyyEFYUex9E",

	authDomain: "angular-firebase-poc-6cec9.firebaseapp.com",

	databaseURL: "https://angular-firebase-poc-6cec9.firebaseio.com",

	projectId: "angular-firebase-poc-6cec9",

	storageBucket: "angular-firebase-poc-6cec9.appspot.com",

	messagingSenderId: "230530228306",

	appId: "1:230530228306:web:8f0616e4535a471fd83f8b"

};
```

## Running application:
- Start Application `npm start`;
