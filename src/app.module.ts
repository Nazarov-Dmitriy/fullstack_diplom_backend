import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://root:example@mongo:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
