import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '..production.env'
          : process.env.NODE_ENV === 'stage'
            ? '.stage.env'
            : '.development.env',
    }),
    UsersModule,
    EmailModule,
  ],
  controllers: [AppController, ApiController, UsersController, ApiController],
  providers: [EmailService],
})
export class AppModule {}
1;
