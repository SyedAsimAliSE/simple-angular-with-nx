import {Injectable} from '@nestjs/common';
import {Well} from '@angular-nx/api-interfaces';

@Injectable()
export class AppService {

  wellsData: Well[] = [
    {wellID: "Well 1", wellName: "Well Name 1"},
    {wellID: "Well 2", wellName: "Well Name 2"},
  ]

  getWells(): Well[] {
    return this.wellsData;
  }

}
