// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyAsq3h1kRXVN3jwa4qVLp2Zh12eJUeIF8c",
    authDomain: "aim-beta.firebaseapp.com",
    databaseURL: "https://aim-beta.firebaseio.com",
    projectId: "aim-beta",
    storageBucket: "aim-beta.appspot.com",
    messagingSenderId: "703795900973"
  }
};

