interface IQueryHoteRoomsDto {
  limit: number;
  offset: number;
  id: string;
  startData: Date;
  endData: Date;
  isEnabled: boolean;
}

export default IQueryHoteRoomsDto;
