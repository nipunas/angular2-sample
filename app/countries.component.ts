import { Component } from '@angular/core';
import { Country } from './app.service';
import { CountryService } from './app.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'countries-list',
    templateUrl: 'app/countries.component.html',
    styleUrls: ['app/styles.css'],
    providers: [ CountryService]
})
export class CountriesComponent implements OnInit {
    countries: Country[];
    selectedCountry: Country;

    constructor(private countryService: CountryService){

    }

    onSelect(country: Country){
        this.selectedCountry = country;
    }

    ngOnInit(): void {
        this.getCountries();
    }

    getCountries(): void{
        this.countries = this.countryService.getCountryList();
    }

}

