import { Component, Input } from '@angular/core';
import { Country } from './app.service';

@Component({
    selector: 'country-details',
    templateUrl: 'app/details.component.html',
    styleUrls: ['app/styles.css']
})

export class DetailsComponent {
    @Input()
    country: Country;

    getUrl(): string {
        return 'http://www.geonames.org/flags/x/'+ this.country.CountryCode +'.gif';
    }
}


