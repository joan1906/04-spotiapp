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
        'Bearer BQCzmZ_S6aahYzXHF2SqcoGUdmrtQBnhY-u0KfNhNxiAgJ68D4f_C_A67EKEiwJo4cVakvubJpPdvr6iMZ4AzPDscOHYwyEserH5Jp6YHvIhuziv1jc',
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
