import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Message } from './Message.shema';

export type SupportRequestDocument = SupportRequest & Document;

@Schema()
export class SupportRequest {
  _id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  public userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  public createdAt: Date;

  @Prop()
  public messages: Message[];

  @Prop()
  public isActive: boolean;
}

export const SupportRequestSchema =
  SchemaFactory.createForClass(SupportRequest);
