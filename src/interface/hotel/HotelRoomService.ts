import { HotelRoom } from 'src/schemas/HotelRoom.schema';
import SearchRoomsParams from './SearchRoomsParams';

interface HotelRoomService {
  create(data: Partial<HotelRoom>): Promise<HotelRoom>;
  findById(id: string): Promise<HotelRoom>;
  search(params: SearchRoomsParams): Promise<HotelRoom[]>;
  update(id: string, data: Partial<HotelRoom>): Promise<HotelRoom>;
}

export default HotelRoomService;
