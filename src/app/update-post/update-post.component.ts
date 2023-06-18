import { Component } from '@angular/core';
import { VisiteurService } from '../services/visiteur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent {
  constructor(
    private visiteurService: VisiteurService,

    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  visiteur: any;
  public id: any;
  public visiteurToUpdate: any;
  public name: any;
  public firstname: any;
  public phonenumber: any;
  public emailaddress: any;
  public password: any;
  public zipcode: any;
  public city: any;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.visiteurService.getVisiteur(this.id).subscribe((response) => {
      this.visiteur = response;
      this.name = this.visiteur.name;
      this.firstname = this.visiteur.firstname;
      this.phonenumber = this.visiteur.phonenumber;
      this.emailaddress = this.visiteur.emailaddress;
      this.zipcode = this.visiteur.zipcode;
      this.city = this.visiteur.city;
    });
  }

  updateVisiteur() {
    this.visiteurToUpdate = {
      name: this.name,

      firstname: this.firstname,
      phonenumber: this.phonenumber,
      emailaddress: this.emailaddress,
      zipcode: this.zipcode,
      city: this.city,
      id: this.id,
    };
    this.visiteurService
      .updateVisiteur(this.id, this.visiteurToUpdate)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['visiteur']);
      });
  }
}
