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
        'Bearer BQBlapy1oaWU5p0sjp2U0pE5wgNnp-q-KtucVG8cRcoKP01E4LXWD4Vlq_l4o27yMOIqfTQkR2vqSATebnx8AEKDwwOb1XW3-xAnKhTi3k0WsJvwsqo',
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
}
