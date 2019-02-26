import { Controller, Get, Body, Req, Query, Post, HttpCode, Res, Param, Put, Delete } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {

    }

    @Post()
    async create(@Body() createTeacherDto: Teacher) {
        await this.teacherService.create(createTeacherDto);
    }

    @Get()
    findAll(@Query() query) {
        return this.teacherService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `This action removes a #${id} cat`;
    }
}
