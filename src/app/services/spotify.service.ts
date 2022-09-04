import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const url = 'https://api.spotify.com/v1/browse/new-releases?limit=20';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCAqTMdrDBsKJq5smJ2Q36SrGJ0JRmRWKGyiC7a78LVyicqSgVWLrLTF_czcxAR7NA-TzEu0O9DPMOj-A9s6tjEyWpYcEfIqtf70cujj2foUeRvtic'
    });

    return this.http.get(url, {headers});
  }
}
