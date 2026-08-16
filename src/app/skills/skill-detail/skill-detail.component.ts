import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { Competence } from '../competence.model';
import { CompetenceService } from '../competence.service';
import { TranslateFieldPipe } from '../../shared/translate-field.pipe';

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [TranslatePipe, TranslateFieldPipe, NzButtonModule, NzIconModule],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss'],
})
export class SkillDetailComponent implements OnInit {
  competence!: Competence;
  id!: number;

  constructor(
    private competenceService: CompetenceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;

      this.competence = this.competenceService.getCompetence(this.id);
    });
  }

  onEditCompetence(): void {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
    });
  }

  onDeleteCompetence(): void {
    this.competenceService.deleteCompetence(this.id);

    this.router.navigate(['/skills']);
  }
}
