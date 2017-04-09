import { NgModule } from '@angular/core';
import {DECLARATIONS} from './app.declarations'
import {AppComponent} from './app.component'
import {PROVIDERS} from './app.providers'
import { IMPORTS } from './app.imports';


@NgModule({
  declarations: [
    DECLARATIONS

  ],
  imports: [
    IMPORTS
  ],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
