import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        ResultComponent,
        SearchComponent
    ],
    exports: [
        ResultComponent,
        SearchComponent
    ]
})
export class ComponentsModule {}
