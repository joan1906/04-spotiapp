import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];
  newReleases: any[] = [];

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    // http.get('https://restcountries.com/v2/lang/es').subscribe((pais: any) => {
    //   this.paises = pais;
    //   console.log(this.paises)
    // })

    this.spotify
      .getNewReleases()
      .subscribe((data) => (this.newReleases = data));
  }

  ngOnInit(): void {}
}
