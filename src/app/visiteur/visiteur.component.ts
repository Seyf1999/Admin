import { Component } from '@angular/core';
import { VisiteurService } from '../services/visiteur.service';
import { AuthorService } from '../services/author.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.css'],
})
export class VisiteurComponent {
  visiteurs: any;
  constructor(
    private visiteurService: VisiteurService,
    private authorService: AuthorService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.refresh();
  }

  deleteVisiteur(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      console.log('Implémenter la fonctionnalité de suppression ici');
      this.visiteurService.deleteVisiteur(id).subscribe(
        (data) => {
          this.refresh();
        },
        (error) => {
          this.refresh();
        }
      );
    }
  }
  detailsVisiteur(id: number) {
    this.router.navigate(['detailsPost/' + id]);
  }
  updateVisiteur(id: any) {
    this.router.navigate(['update/' + id]);
  }
  refresh() {
    this.visiteurService.getVisiteurs().subscribe((data) => {
      this.visiteurs = data;
      console.log(this.visiteurs);
    });
  }
}
