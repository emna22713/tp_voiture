import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { CreateVoitureDto } from './dto/create-voiture.dto';
import { UpdateVoitureDto } from './dto/update-voiture.dto';

@Controller('voiture')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Post()
  create(@Body() createVoitureDto: CreateVoitureDto) {
    return this.voitureService.create(createVoitureDto);
  }

  @Get()
  findAll() {
    return this.voitureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voitureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoitureDto: UpdateVoitureDto) {
    return this.voitureService.update(+id, updateVoitureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voitureService.remove(+id);
  }
}
