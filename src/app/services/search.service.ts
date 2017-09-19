import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/RX';

@Injectable()
export class SearchService {
    API_KEY: string = '0a5f823ebb444b33a93e4e3230e0e712';
    BASE_URL: string = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    constructor(private http: HttpClient) {}

    results: Array<string>;

    find = (query) => {
        let params = new HttpParams();
        params = params.append('api-key', this.API_KEY);
        params = params.append('page', '1');
        params = params.append('q', query);
        this.http.get(this.BASE_URL, {params: params}).subscribe(data => {
            this.results = data['response']['docs'];
            console.log(this.results);
        });
    }
}
