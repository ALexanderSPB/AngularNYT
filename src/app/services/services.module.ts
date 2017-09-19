import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { SearchService } from './search.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ SearchService ]
})
export class ServicesModule {}
