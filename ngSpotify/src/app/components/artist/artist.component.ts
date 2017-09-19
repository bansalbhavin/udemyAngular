import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';

import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  album: Album[];

  constructor(private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._spotifyService.getArtist(id)
              .subscribe(
                artist => {
                  this.artist = artist
                }
              )
        });
  }
}
