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
var manual_service_1 = require("./manual.service");
var ManualListComponent = (function () {
    function ManualListComponent(_manualService) {
        this._manualService = _manualService;
        this.pageTitle = 'Manuals List';
        this.listFilter = 'CD';
    }
    ManualListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._manualService.getManuals()
            .subscribe(function (manuals) { return _this.manuals = manuals; }, function (error) { return _this.errorMessage = error; });
    };
    return ManualListComponent;
}());
ManualListComponent = __decorate([
    core_1.Component({
        selector: 'home-manuals',
        //moduleId: module.id, absolute path is required for css
        templateUrl: 'app/equip/manual-list.component.html',
        styleUrls: ['app/shared/list.component.css']
    }),
    __metadata("design:paramtypes", [manual_service_1.ManualService])
], ManualListComponent);
exports.ManualListComponent = ManualListComponent;
//# sourceMappingURL=manual-list.component.js.map