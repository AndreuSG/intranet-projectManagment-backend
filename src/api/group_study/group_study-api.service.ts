import { Injectable } from '@nestjs/common';
import { GroupStudyService } from 'src/domain/group_study/group_study.service';

@Injectable()
export class GroupStudyApiService {
    constructor(private readonly groupStudyService: GroupStudyService) {}

    async getGroupsByEmail(email: string) {
        return this.groupStudyService.findByEmail(email);
    }
}
