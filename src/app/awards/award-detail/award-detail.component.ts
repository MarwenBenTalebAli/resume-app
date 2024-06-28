import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formation.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-award-detail',
  standalone: true,
  imports: [],
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.scss'],
})
export class AwardDetailComponent implements OnInit {
  formation: Formation;
  id: number;

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.formation = this.formationService.getFormation(this.id);
    });
  }

  onEditFormation() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteFormation() {
    this.formationService.deleteFormation(this.id);
    this.router.navigate(['/awards']);
  }
}
