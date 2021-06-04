import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomComponentComponent } from './custom-component/custom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent
  ],
  exports: [ CustomComponentComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([CustomComponentComponent])
  ],
  entryComponents: [
    CustomComponentComponent,
  ],
  providers: [],
  
  // entryComponents:[CustomComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
