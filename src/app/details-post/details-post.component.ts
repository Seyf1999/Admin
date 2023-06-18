import { Component } from '@angular/core';
import { VisiteurService } from '../services/visiteur.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css'],
})
export class DetailsPostComponent {
  post: any;
  posts: any;
  authors: any;
  id: any;
  constructor(
    private visiteurService: VisiteurService,
    private authorService: AuthorService,
    private activatedroute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.visiteurService.getVisiteur(this.id).subscribe((response) => {
      // console.log(response);
      this.refresh();
      this.post = response;
    });
  }
  refresh() {
    this.authorService.getAuthors().subscribe((data) => {
      this.authors = data;
      this.setName();
    });
  }
  setName() {
    this.visiteurService.getVisiteurs().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
      for (let post of this.posts) {
        for (let author of this.authors) {
          if (post.author_id == author.id) {
            return (post.full_name = author.full_name);
          }
        }
      }
    });
  }
}
