import { ApiProperty } from '@nestjs/swagger';

export class CreateLogDto {
  @ApiProperty({ example: 'ini log' })
  log: string;
}
