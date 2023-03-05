import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import ISupportRequestClientService from 'src/interface/supportRequest/ISupportRequestClientService';
import {
  SupportRequest,
  SupportRequestDocument,
} from 'src/schemas/SupportRequest.shema';
import { EventEmitter2 } from '@nestjs/event-emitter';
import CreateSupportRequestDto from 'src/interface/supportRequest/CreateSupportRequestDto';
import MarkMessagesAsReadDto from 'src/interface/supportRequest/MarkMessagesAsReadDto';
import { Message, MessageDocument } from 'src/schemas/Message.shema';

@Injectable()
export class SupportRequestClient implements ISupportRequestClientService {
  constructor(
    private eventEmitter: EventEmitter2,
    @InjectModel(SupportRequest.name)
    private SupportRequestModel: Model<SupportRequestDocument>,
    @InjectModel(Message.name)
    private MessageModel: Model<MessageDocument>,
  ) {}

  public async createSupportRequest(
    data: CreateSupportRequestDto,
  ): Promise<SupportRequest> {
    //исправить new
    const supportRequest = new this.SupportRequestModel(data);
    return supportRequest;
  }
  public async markMessagesAsRead(params: MarkMessagesAsReadDto) {
    new this.SupportRequestModel(params);
  }

  public async getUnreadCount(supportRequest: string): Promise<Message[]> {
    const message = [];
    new this.MessageModel(supportRequest);
    return message;
  }
}
