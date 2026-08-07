// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyABXXZaLdr4vqVXdDjygmRKg6d0VhhmoQs',
    authDomain: 'resume-profile.firebaseapp.com',
    databaseURL: 'https://resume-profile.firebaseio.com',
    projectId: 'resume-profile',
    storageBucket: 'resume-profile.firebasestorage.app',
    messagingSenderId: '560707600047',
    appId: '1:560707600047:web:75e5cbf90a346975285e5a',
    measurementId: 'G-JD1NFBS5G4',
  },
  collections: {
    competences: 'competences2',
    educations: 'educations2',
    experiences: 'experiences2',
    formations: 'formations2',
    interest: 'interest2',
    projets: 'projets2',
    users: 'users2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
