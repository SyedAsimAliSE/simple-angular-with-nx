import {Controller, Get} from '@nestjs/common';

import {Well} from '@angular-nx/api-interfaces';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/')
  getData(): Well[] {
    return this.appService.getWells();
  }
}
