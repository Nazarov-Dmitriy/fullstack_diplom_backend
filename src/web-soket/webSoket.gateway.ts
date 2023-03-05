import { Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(81, {
  cors: {
    origin: 'http://localhost:3004',
  },
  serveClient: false,
})
export class SoketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger = new Logger('SoketGateway');

  handleConnection(client) {
    this.logger.log('New client connected');
    client.emit('connection', 'Successfully connected to server');
  }

  handleDisconnect(client) {
    this.logger.log('Client disconnected');
  }

  @SubscribeMessage('message')
  @OnEvent('support.created')
  handleOrderEventss(payload: any) {
    return payload;
  }

  @OnEvent('support.created')
  handleOrderEvents(payload: any) {
    console.log(payload);
  }
}
