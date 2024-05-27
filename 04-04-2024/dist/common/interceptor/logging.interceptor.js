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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const error_service_1 = require("../../error/error.service");
const log_service_1 = require("../../log/log.service");
let LoggingInterceptor = class LoggingInterceptor {
    constructor(logService, errorService) {
        this.logService = logService;
        this.errorService = errorService;
    }
    intercept(context, next) {
        const now = Date.now();
        const request = context.switchToHttp().getRequest();
        return next
            .handle()
            .pipe((0, operators_1.tap)({
            next: () => {
                const after = Date.now();
                const verboRota = request.method;
                const nomeRota = request.url;
                const tempoExec = (after - now).toString();
                const objetoLog = {
                    verboRota: verboRota,
                    nomeRota: nomeRota,
                    tempoExec: tempoExec
                };
                this.logService.create(objetoLog);
            },
            error: (error) => {
                const nomeRota = request.url;
                const verboRota = request.method;
                const objetoErro = {
                    verboRota: verboRota,
                    nomeRota: nomeRota,
                    erro: error
                };
                this.errorService.create(objetoErro);
            }
        }));
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [log_service_1.LogService,
        error_service_1.ErrorService])
], LoggingInterceptor);
//# sourceMappingURL=logging.interceptor.js.map