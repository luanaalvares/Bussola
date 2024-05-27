import { Inject, Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log-dto';
import { Log } from './schema/log.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LogService {
    constructor(@InjectModel(Log.name) private logModel: Model<Log>) { }

    create(createLogDto: CreateLogDto) {
        this.logModel.create(createLogDto)
    }
}
