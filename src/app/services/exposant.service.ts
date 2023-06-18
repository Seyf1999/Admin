import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExposantService {
  constructor(private http: HttpClient) {}

  //get Posts
  getExposants() {
    return this.http.get('http://localhost:3000/api/exposants/');
  }
  addExposants(post: any) {
    return this.http.post('http://localhost:3000/api/exposants/', post);
  }
  deletExposants(id: number) {
    return this.http.delete('http://localhost:3000/api/exposants/' + id);
  }
  getExposant(idd: number) {
    return this.http.get('http://localhost:3000/api/exposants/' + idd);
  }
  updateExposants(idd: number, new_post: any) {
    return this.http.put(
      'http://localhost:3000/api/exposants/' + idd,
      new_post
    );
  }
}
