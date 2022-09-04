import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  newArtists: any[] = [];

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  search(termino: string) {
    this.spotify
      .getArtist(termino)
      .subscribe(artista => this.newArtists = artista);
      console.log(this.newArtists)
  }
}
