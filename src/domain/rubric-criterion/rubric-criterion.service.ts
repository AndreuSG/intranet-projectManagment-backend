import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RubricCriterion } from './rubric-criterion.entity';

@Injectable()
export class RubricCriterionService {
  constructor(
    @InjectRepository(RubricCriterion)
    private readonly rubricCriterionRepo: Repository<RubricCriterion>,
  ) {}

  async create(data: Partial<RubricCriterion>): Promise<RubricCriterion> {
    const criterion = this.rubricCriterionRepo.create(data);
    return this.rubricCriterionRepo.save(criterion);
  }

  findAll(): Promise<RubricCriterion[]> {
    return this.rubricCriterionRepo.find();
  }

  findByRubric(rubricaId: number): Promise<RubricCriterion[]> {
    return this.rubricCriterionRepo.find({ where: { rubricaId } });
  }

  findOne(id: number): Promise<RubricCriterion | null> {
    return this.rubricCriterionRepo.findOneBy({ id });
  }

  async update(id: number, data: Partial<RubricCriterion>): Promise<RubricCriterion> {
    const criterion = await this.findOne(id);
    if (!criterion) throw new NotFoundException('Criterion not found');
    Object.assign(criterion, data);
    return this.rubricCriterionRepo.save(criterion);
  }

  async delete(id: number){
    return this.rubricCriterionRepo.delete(id);
  }
}
