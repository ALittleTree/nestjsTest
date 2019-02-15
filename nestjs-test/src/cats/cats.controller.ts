import { Controller, Get, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('findone')
    findAll() {
        return 'this action will find all cats';
    }
    @Get('findall')
    findOne() {
        return 'this action will fi'
    }


}
