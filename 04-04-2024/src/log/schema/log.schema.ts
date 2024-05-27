import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ErrorDocument = HydratedDocument<Log>

@Schema({timestamps: true})
export class Log {
    @Prop({ required: true })
    nomeRota: string

    @Prop({ required: true })
    verboRota: string

    @Prop()
    tempoExec: number
}

export const LogSchema = SchemaFactory.createForClass(Log)