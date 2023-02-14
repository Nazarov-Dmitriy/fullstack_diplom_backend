import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { PassportModule } from '@nestjs/passport';
import { Hotel, HotelSchema } from 'src/schemas/Hotel.schema';
import { HotelRoom, HotelRoomSchema } from 'src/schemas/HotelRoom.schema';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { HotelRoomService } from './hotelRoom.service';

@Module({
  // imports: [PassportModule.register({ session: true })],
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
    // MongooseModule.forFeature([
    //   { name: HotelRoom.name, schema: HotelRoomSchema },
    // ]),
  ],
  controllers: [HotelController],
  providers: [HotelService],
  // providers: [HotelService, HotelRoomService],
  // exports: [HotelService, HotelRoomService],
  exports: [HotelService],
})
export class HotelModule {}
