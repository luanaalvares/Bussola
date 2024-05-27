import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorSchema } from './schema/error.schema';
import { Error } from './schema/error.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Error.name, schema: ErrorSchema }])],
  controllers: [ErrorController],
  providers: [ErrorService],
  exports: [ErrorService]
})
export class ErrorModule {}
