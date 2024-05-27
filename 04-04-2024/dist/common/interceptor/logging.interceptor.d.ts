import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ErrorService } from 'src/error/error.service';
import { LogService } from 'src/log/log.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private readonly logService;
    private readonly errorService;
    constructor(logService: LogService, errorService: ErrorService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
