import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CountriesComponent }   from './countries.component';
import { DetailsComponent } from './details.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, CountriesComponent, DetailsComponent, DashboardComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
