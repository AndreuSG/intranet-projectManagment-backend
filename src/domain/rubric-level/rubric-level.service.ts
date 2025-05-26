import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RubricLevel } from './rubric-level.entity';
import { CreateRubricLevelDto } from './dto/create-rubric-level.dto';
import { UpdateRubricLevelDto } from './dto/update-rubric-level.dto';

@Injectable()
export class RubricLevelService {
  constructor(
    @InjectRepository(RubricLevel)
    private readonly levelRepo: Repository<RubricLevel>,
  ) {}

  async create(dto: CreateRubricLevelDto) {
    const level = this.levelRepo.create(dto);
    return this.levelRepo.save(level);
  }

  async findByCriterion(criteriId: number) {
    return this.levelRepo.find({ where: { criteriId } });
  }

  async update(id: number, dto: UpdateRubricLevelDto) {
    await this.levelRepo.update(id, dto);
    return this.levelRepo.findOneBy({ id });
  }

  async delete(id: number) {
    return this.levelRepo.delete(id);
  }
}
