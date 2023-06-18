import { Component } from '@angular/core';
import { VisiteurService } from '../services/visiteur.service';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  authors: any;

  constructor(
    private visiteurService: VisiteurService,
    private router: Router,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  createPost(postform: any) {
    let name = postform.value.name;
    let id = postform.value.id;
    let firstname = postform.value.firstname;
    let phonenumber = postform.value.phonenumber;
    let emailaddress = postform.value.emailaddress;
    let password = postform.value.password;
    let zipcode = postform.value.zipcode;
    let city = postform.value.city;
    let interest = postform.value.interest;

    let post = {
      name: name,
      id: id,
      firstname: firstname,
      phonenumber: phonenumber,
      emailaddress: emailaddress,
      zipcode: zipcode,
      city: city,
      interest: interest,
      password: password, // Store the hashed password
    };

    this.visiteurService.addVisiteur(post).subscribe((data) => {
      alert('Visitor Added');
      console.log(data);
      this.router.navigate(['Visiteur']);
    });
  }

  refresh() {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data;
      console.log(this.authors);
    });
  }
}
