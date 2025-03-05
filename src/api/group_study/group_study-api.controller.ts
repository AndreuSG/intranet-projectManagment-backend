import { Controller, Get, Query } from '@nestjs/common';
import { GroupStudyApiService } from './group_study-api.service';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/group_study`)
export class GroupStudyApiController {
    constructor(private readonly groupStudyApiService: GroupStudyApiService) {}

    @Get()
    async getByEmail(@Query('email') email: string) {
        return this.groupStudyApiService.getGroupsByEmail(email);
    }
}
