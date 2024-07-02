import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HerosService} from './heros.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Controller('heros')
export class HerosController {
  constructor(private readonly HerosService: HerosService) {}

  @Post()
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.HerosService.create(createHeroDto);
  }

  @Get()
  findAll() {
    return this.HerosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.HerosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.HerosService.update(+id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.HerosService.remove(+id);
  }
}
