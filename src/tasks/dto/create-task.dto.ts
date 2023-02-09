import { IsNotEmpty } from 'class-validator';

export class CreatTaskTto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
