import { Router } from '@angular/router';
import { ExposantService } from '../services/exposant.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exposant',
  templateUrl: './exposant.component.html',
  styleUrls: ['./exposant.component.css'],
})
export class ExposantComponent {
  exposants: any;

  // injection de dependences : ProviderService

  constructor(
    private exposantService: ExposantService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.refrech();
  }
  refrech() {
    this.exposantService.getExposants().subscribe((data: any) => {
      this.exposants = data;
      console.log(this.exposants);
    });
  }
  deleteExposant(id: number) {
    console.log(id);
    if (confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      console.log('Implémenter la fonctionnalité de suppression ici');
      this.exposantService.deletExposants(id).subscribe(
        (data) => {
          this.refresh();
        },
        (error) => {
          this.refresh();
        }
      );
    }
  }

  updatExposants(id: any) {
    this.router.navigate(['update/' + id]);
  }
  refresh() {
    this.exposantService.getExposants().subscribe((data) => {
      this.exposants = data;
    });
  }
}
