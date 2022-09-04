import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const url = 'https://api.spotify.com/v1/browse/new-releases?limit=20';
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB7S6snWRU3aFq-zAFV98oyyoRogQ6EhlEFZtaS7nKj5JK5XUl4D1u3APQviVqv_tT6xZLCFN6KzwML-8slU3k7EOMza0KD8DgJM794WdqoNEpAdww',
    });
    return this.http.get(url, { headers }).pipe(map((data: any) => data['albums'].items));
  }

  getArtist(termino: string) {
    const url = `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15&offset=5`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB7S6snWRU3aFq-zAFV98oyyoRogQ6EhlEFZtaS7nKj5JK5XUl4D1u3APQviVqv_tT6xZLCFN6KzwML-8slU3k7EOMza0KD8DgJM794WdqoNEpAdww'
    });
    return this.http.get(url, { headers }).pipe(
      map((data: any) => data['artists'].items)
    );
  }
}
