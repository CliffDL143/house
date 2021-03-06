"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var tool_list_component_1 = require("./tool-list.component");
var tool_detail_component_1 = require("./tool-detail.component");
var tool_filter_pipe_1 = require("./tool-filter.pipe");
var tool_service_1 = require("./tool.service");
var ToolModule = (function () {
    function ToolModule() {
    }
    return ToolModule;
}());
ToolModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'tools', component: tool_list_component_1.ToolListComponent },
                { path: 'tool/:id',
                    component: tool_detail_component_1.ToolDetailComponent
                }
            ])
        ],
        declarations: [
            tool_list_component_1.ToolListComponent,
            tool_detail_component_1.ToolDetailComponent,
            tool_filter_pipe_1.ToolFilterPipe
        ],
        providers: [
            tool_service_1.ToolService
        ]
    })
], ToolModule);
exports.ToolModule = ToolModule;
//# sourceMappingURL=tool.module.js.map