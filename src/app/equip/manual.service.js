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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var ManualService = (function () {
    function ManualService(_http) {
        this._http = _http;
        this._manualUrl = 'api/equip/manuals.json';
    }
    ManualService.prototype.getManuals = function () {
        return this._http.get(this._manualUrl)
            .map(function (response) { return response.json(); });
        //   .do(data => console.log('All: ' + JSON.stringify(data)))
        //   .catch( this.handleError );
    };
    ManualService.prototype.getManual = function (id) {
        return this.getManuals()
            .map(function (manuals) { return manuals.find(function (m) { return m.manualId === id; }); });
    };
    ManualService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    return ManualService;
}());
ManualService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ManualService);
exports.ManualService = ManualService;
//# sourceMappingURL=manual.service.js.map