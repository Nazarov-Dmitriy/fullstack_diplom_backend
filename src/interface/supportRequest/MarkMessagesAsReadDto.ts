import { ID } from '../ID';

interface MarkMessagesAsReadDto {
  user: ID;
  supportRequest: ID;
  createdBefore: Date;
}

export default MarkMessagesAsReadDto;
