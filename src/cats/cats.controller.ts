import { Controller, Get, Body, Req, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('findall')
    findAll() {
        return 'this action will find all cats';
    }
    @Get('findone')
    findOne() {
        return 'this action will fi';
    }
    @Get()
    findall(@Query() myquery) {
        return 'this is query2:' + myquery;
    }

}
