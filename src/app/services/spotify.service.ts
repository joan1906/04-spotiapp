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
        'Bearer BQDd1om5h2DcPiHR7z3fOtqjMqGL1exTifZHegTADhzLdIjNLIRN99zronmgKPEJ6U9Ea9YwYQ10c7RPgOUggj8kj2EJt_DMdpjYvk0i7pcV-XzOfjc',
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
