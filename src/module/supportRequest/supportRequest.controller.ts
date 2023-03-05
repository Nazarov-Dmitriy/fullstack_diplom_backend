import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { HttpExceptionFilter } from 'src/HttpExceptionFilter/HttpExceptionFilter ';
import CreateSupportRequestDto from 'src/interface/supportRequest/CreateSupportRequestDto';
import { SupportRequestClient } from './supportRequestClient.service';

@UseFilters(new HttpExceptionFilter())
@Controller('api')
export class ReservationController {
  constructor(
    private readonly supportRequestClient: SupportRequestClient,
    private eventEmitter: EventEmitter2,
  ) {}

  // @Roles('admin')
  // @UseGuards(AuthenticatedGuard, RoleGuard)
  @Post('/client/support-requests/')
  async addHotelRoom(@Body() body: CreateSupportRequestDto) {
    // console.log(body);
    this.eventEmitter.emit('support.created', { body });
  }
}
