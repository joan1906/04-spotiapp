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
        'Bearer BQDRB0iJsS6NoB2Vb3fGWXUG_KymViq7UYF59lq-TVjX9KLuBo2ZiyiKTV0a34zt3pYciRAiF5oNoa6QBhJYbDEiItWlAV5NsTAh39s_0CstMTA3nGk',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(
      map(
        (data: any) => data['albums'].items
      )
    );
  }

  getArtist(termino: string) {
    return this.getQuery('search?q=${termino}&type=artist&limit=15&offset=5')
    .pipe(
      map(
        (data: any) => data['artists'].items
      )
    );
  }
}
