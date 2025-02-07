"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModule = void 0;
const common_1 = require("@nestjs/common");
const error_service_1 = require("./error.service");
const error_controller_1 = require("./error.controller");
const mongoose_1 = require("@nestjs/mongoose");
const error_schema_1 = require("./schema/error.schema");
const error_schema_2 = require("./schema/error.schema");
let ErrorModule = class ErrorModule {
};
exports.ErrorModule = ErrorModule;
exports.ErrorModule = ErrorModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: error_schema_2.Error.name, schema: error_schema_1.ErrorSchema }])],
        controllers: [error_controller_1.ErrorController],
        providers: [error_service_1.ErrorService],
        exports: [error_service_1.ErrorService]
    })
], ErrorModule);
//# sourceMappingURL=error.module.js.map