import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import { AuthService } from './auth/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'resume';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // AngularFireModule.initializeApp(environment.firebaseConfig);
    const analytics = firebase.analytics();
    this.authService.angularFireAuth.auth.onAuthStateChanged(
      async user => {
        if (user) {
          analytics.setUserId(user.uid);
        }
      }
    );

    this.authService.angularFireAuth.auth.onIdTokenChanged(
      async user => {
        if (user) {
          // analytics.setUserProperties({ access_level: (await user.getIdTokenResult()).claims.access_level});
        }
      }
    );

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
