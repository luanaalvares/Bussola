import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ErrorDocument = HydratedDocument<Error>

@Schema({timestamps: true})
export class Error {
    @Prop({ required: true })
    nomeRota: string

    @Prop({ required: true })
    verboRota: string

    @Prop({ required: true })
    erro: string
}

export const ErrorSchema = SchemaFactory.createForClass(Error)