import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    create(createTeacherDto: Teacher): Promise<void>;
    findAll(query: any): Promise<Teacher[]>;
    findOne(id: any): string;
    update(id: any, updateCatDto: any): string;
    remove(id: any): string;
}
