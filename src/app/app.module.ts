import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule,MatTableModule,MatFormFieldModule,MatInputModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatAutocompleteModule,MatOptionModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
  
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
