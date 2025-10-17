import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    return process.env.DATABASE_HOST ? process.env.DATABASE_HOST : '';
  }

  @Get('/db-host-from-config')
  getDatabaseHsotFromConfigService(): string | undefined {
    return this.configService.get('DATABASE_HOST');
  }
}
