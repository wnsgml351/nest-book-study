import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';

@Module({
  imports: [UsersModule],
  controllers: [ApiController, UsersController, ApiController],
  providers: [],
})
export class AppModule {}
