import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

import { Artist } from '../../models/artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService){
  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(
      res => {
        // console.log(res.artists.items);
        this.searchRes = res.artists.items;
      }
    );
  }
}
