import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  newArtists: any[] = [];
  loading: boolean = false;

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  search(termino: string) {
    if (termino == '') {
      this.loading = false
      this.newArtists = [];
    } else {
      this.loading = true;
      this.spotify
        .getArtists(termino)
        .subscribe((artista) => {
          console.log(artista)
          this.newArtists = artista;
          this.loading = false;
        });
    }
  }
}
