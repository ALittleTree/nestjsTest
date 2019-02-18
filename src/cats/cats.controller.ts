import { Controller, Get, Body, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('findall')
    findAll() {
        return 'this action will find all cats';
    }
    @Get('findone')
    findOne() {
        return 'this action will fi'
    }
    @Get()
    findall(@Req() request) {
        return 'this action returns all cats'
    }

}
