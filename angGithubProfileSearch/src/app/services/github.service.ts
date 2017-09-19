import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = '289140d002f66053caa5';
    private client_secret = '3576da4ce7be8a2f4805011257df7733a734d632';

    constructor( private _http: Http){
        console.log("Github service ready...");
        this.username = 'bansalbhavin';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username){
        this.username = username;
    }
}