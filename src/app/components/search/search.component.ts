import { Component } from '@angular/core';

import { SearchService } from '../../services';

@Component({
    templateUrl: './search.component.html',
    selector: 'app-search',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    constructor(private SearchService: SearchService) {}
    query: String = '';
    search = () => {
        this.SearchService.find(this.query);
    }
}
