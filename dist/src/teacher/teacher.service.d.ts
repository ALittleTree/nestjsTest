import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';
export declare class TeacherService {
    private readonly tearcherRepository;
    constructor(tearcherRepository: Repository<Teacher>);
    private readonly teachers;
    create(teacher: Teacher): void;
    findAll(): Promise<Teacher[]>;
}
