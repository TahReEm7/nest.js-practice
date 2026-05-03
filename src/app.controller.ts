import { Controller, Delete, Get, Patch, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get()
  getAllHello() {
    return this.appService.getAllHello();
  }

  @Get(':id')
  getHello(@Param('id' , ParseIntPipe) id: Number): string {
    return this.appService.getHello(id);
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Patch()
  patchHello(): string {
    return this.appService.patchHello();
  }

  @Put()
  updateHello(): string {
    return this.appService.updateHello();
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}