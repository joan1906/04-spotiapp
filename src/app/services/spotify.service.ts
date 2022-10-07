import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCccchpeXeKg8cLqeXCYYjnWTNSox1jei7sGkUmuVMQSnETqbn_HN04zFpfhDtGyq6N6KkgNp3dh0G9ZgE-CKDqBcL3rmMWLn-i48sZPRrik9wpXYs',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(
      'browse/new-releases?limit=15').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&limit=15&offset=5`).pipe(
        map((data: any) => data['artists'].items)
      );
  }

  getArtist(id: string) {
    return this.getQuery(
      `artists/${id}`
    );
  }

  getTopTracks(id: string) {
    return this.getQuery(
      `artists/${id}/top-tracks?country=us`).pipe(
        map((data: any) => data['tracks'])
      );
  }
}
