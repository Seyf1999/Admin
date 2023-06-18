import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listauthor',
  templateUrl: './listauthor.component.html',
  styleUrls: ['./listauthor.component.css'],
})
export class ListauthorComponent {
  authors: any;

  // injection de dependences : ProviderService

  constructor(private authorService: AuthorService, private router: Router) {}
  ngOnInit(): void {
    this.refrech();
  }
  refrech() {
    this.authorService.getAuthors().subscribe((data: any) => {
      this.authors = data;
      console.log(this.authors);
    });
  }
}
