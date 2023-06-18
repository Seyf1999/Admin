import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VisiteurService {
  constructor(private http: HttpClient) {}

  //get Posts
  getVisiteurs() {
    return this.http.get('http://localhost:3000/api/visiteurs/');
  }
  addVisiteur(post: any) {
    return this.http.post('http://localhost:3000/api/visiteurs/', post);
  }
  deleteVisiteur(id: number) {
    return this.http.delete('http://localhost:3000/api/visiteurs/' + id);
  }
  getVisiteur(idd: number) {
    return this.http.get('http://localhost:3000/api/visiteurs/' + idd);
  }
  updateVisiteur(idd: number, new_post: any) {
    return this.http.put(
      'http://localhost:3000/api/visiteurs/' + idd,
      new_post
    );
  }
}
