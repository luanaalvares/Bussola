import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Error } from './schema/error.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateErrorDto } from './dto/create-error-dto';

@Injectable()
export class ErrorService {
    constructor(@InjectModel(Error.name) private errorModel: Model<Error>) { }

    create(createErrorDto: CreateErrorDto) {
        this.errorModel.create(createErrorDto)
    }
}
