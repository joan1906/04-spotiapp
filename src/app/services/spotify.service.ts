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
        'Bearer BQB15C0b9YQZ2WzuqwN_dek6eYXYi2UDNMPrO2FhzguU-x5HanWBE6N98mtfv1KhXRUfbSmX-FW1dh0eBvqNIub1UK976FRbuzJsR_q-8AuT7fUhCuU',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(
      'browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&limit=15&offset=5`).pipe(
        map((data: any) => data['artists'].items)
      );
  }
}
