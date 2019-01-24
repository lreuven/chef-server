import { Controller, Post, Body } from '@nestjs/common';

@Controller('dev')
export class DevController {
  constructor() {
  }

  @Post()
  create(@Body() createCatDto) {
    return 'This action adds a new cat';
  }
}