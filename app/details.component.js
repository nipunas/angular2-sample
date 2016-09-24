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
var DetailsComponent = (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.getUrl = function () {
        return 'http://www.geonames.org/flags/x/' + this.country.CountryCode + '.gif';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', app_service_1.Country)
    ], DetailsComponent.prototype, "country", void 0);
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'country-details',
            templateUrl: 'app/details.component.html',
            styleUrls: ['app/styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map