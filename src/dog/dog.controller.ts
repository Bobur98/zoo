import { Controller, Get, Param, Query } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('id from Param: ', params);
    console.log('Query: ', query);

    return this.dogService.introduce();
  }
}