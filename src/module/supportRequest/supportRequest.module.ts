import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/schemas/Message.shema';
import {
  SupportRequest,
  SupportRequestSchema,
} from 'src/schemas/SupportRequest.shema';
import { ReservationController } from './supportRequest.controller';
import { SupportRequestClient } from './supportRequestClient.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SupportRequest.name, schema: SupportRequestSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  controllers: [ReservationController],
  providers: [SupportRequestClient],
  exports: [SupportRequestClient],
})
export class SupportRequestModule {}

// constructor(private eventEmitter: EventEmitter2) {}
