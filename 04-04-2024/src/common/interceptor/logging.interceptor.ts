import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { request } from 'http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CreateErrorDto } from 'src/error/dto/create-error-dto';
import { ErrorService } from 'src/error/error.service';
import { CreateLogDto } from 'src/log/dto/create-log-dto';
import { LogService } from 'src/log/log.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

  constructor(private readonly logService: LogService,
    private readonly errorService: ErrorService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest()
    return next
      .handle()
      .pipe(
        tap({
          next: () => {
            const after = Date.now();
            const verboRota = request.method
            const nomeRota = request.url
            const tempoExec = (after - now).toString()
  
            const objetoLog: CreateLogDto = {
              verboRota: verboRota,
              nomeRota: nomeRota,
              tempoExec: tempoExec
            };
            this.logService.create(objetoLog)
          },
          error: (error) => {
            const nomeRota = request.url
            const verboRota = request.method
            const objetoErro: CreateErrorDto = {
              verboRota: verboRota,
              nomeRota: nomeRota,
              erro: error
            }
            this.errorService.create(objetoErro)
          }
        },
        
        )
      )
  }
}