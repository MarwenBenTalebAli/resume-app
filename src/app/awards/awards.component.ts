import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormationService } from './formation.service';
import { Formation } from './formation.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit, OnDestroy {

  formations: Formation[];
  subscription: Subscription;
  @Input() isAdmin = false;

  constructor(private formationService: FormationService, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthenticated();
    this.formations = this.formationService.getFormations();
    this.subscription = this.formationService.formationsChanged.subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
