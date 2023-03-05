import { Message } from 'src/schemas/Message.shema';
import { ID } from '../ID';
import MarkMessagesAsReadDto from './MarkMessagesAsReadDto';

interface ISupportRequestEmployeeService {
  markMessagesAsRead(params: MarkMessagesAsReadDto);
  getUnreadCount(supportRequest: ID): Promise<Message[]>;
  closeRequest(supportRequest: ID): Promise<void>;
}

export default ISupportRequestEmployeeService;
