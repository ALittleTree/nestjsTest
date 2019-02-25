import { Injectable } from '@nestjs/common';
import { Teacher } from './teacher.interface';

@Injectable()
export class TeacherService {
    private readonly teachers: Teacher[] = [];
    
    create(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    findAll(): Teacher[] {
        return this.teachers;
    }
}
