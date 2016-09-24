"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var CountriesComponent = (function () {
    function CountriesComponent(countryService) {
        this.countryService = countryService;
    }
    CountriesComponent.prototype.onSelect = function (country) {
        this.selectedCountry = country;
    };
    CountriesComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountriesComponent.prototype.getCountries = function () {
        this.countries = this.countryService.getCountryList();
    };
    CountriesComponent = __decorate([
        core_1.Component({
            selector: 'countries-list',
            templateUrl: 'app/countries.component.html',
            styleUrls: ['app/styles.css'],
            providers: [app_service_1.CountryService]
        }), 
        __metadata('design:paramtypes', [app_service_1.CountryService])
    ], CountriesComponent);
    return CountriesComponent;
}());
exports.CountriesComponent = CountriesComponent;
//# sourceMappingURL=countries.component.js.map