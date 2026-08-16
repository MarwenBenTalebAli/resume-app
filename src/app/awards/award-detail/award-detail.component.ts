import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormationService } from '../formation.service';
import { Formation } from '../formation.model';

import { TranslatePipe } from '@ngx-translate/core';
import { TranslateFieldPipe } from '../../shared/translate-field.pipe';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-award-detail',
  standalone: true,
  imports: [TranslatePipe, TranslateFieldPipe, NzButtonModule, NzIconModule],
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.scss'],
})
export class AwardDetailComponent implements OnInit {
  formation!: Formation;

  id!: number;

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;

      this.formation = this.formationService.getFormation(this.id);
    });
  }

  onEditFormation(): void {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
    });
  }

  onDeleteFormation(): void {
    this.formationService.deleteFormation(this.id);

    this.router.navigate(['/awards']);
  }
}
