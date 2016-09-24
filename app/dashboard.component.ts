import { Component } from '@angular/core';
import { Country } from './app.service';
import { CountryService } from './app.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/styles.css'],
    providers: [CountryService]
})

export class DashboardComponent {
    model = new Country('Norway', 'Oslo');
    a = "1";
    countries: Country[];

    constructor(private countryService: CountryService){
this.countries = this.countryService.getCountryList();
    }

    onSubmit = function () {
        this.countries.push(this.model);
        return false;
    }
    active = true;
}