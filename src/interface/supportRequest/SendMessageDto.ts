import { ID } from '../ID';

interface SendMessageDto {
  author: ID;
  supportRequest: ID;
  text: string;
}

export default SendMessageDto;
