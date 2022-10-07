import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean = false;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    })
  };

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((data) => {
      this.topTracks = data;
      console.log(data)
    })
  };
}
