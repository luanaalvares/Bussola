import { Module } from '@nestjs/common';
import { LogService } from 'src/log/log.service';
import { LoggingInterceptor } from './logging.interceptor';
import { ErrorService } from 'src/error/error.service';

@Module({
  imports: [LogService, ErrorService],
  controllers: [],
  providers: [LoggingInterceptor],
})
export class ErrorModule {}