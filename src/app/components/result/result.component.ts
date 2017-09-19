import { Component } from '@angular/core';

import { SearchService } from '../../services';

@Component({
    templateUrl: './result.component.html',
    selector: 'app-result'
})
export class ResultComponent {
    constructor(private searchService: SearchService) {}
}
