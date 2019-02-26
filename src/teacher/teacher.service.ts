import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher)
        private readonly tearcherRepository: Repository<Teacher>,
    ) { }

    async create(teacher: Teacher) {
        await this.tearcherRepository.insert(teacher);
    }

    findAll(): Promise<Teacher[]> {
        return this.tearcherRepository.find();
    }
}
