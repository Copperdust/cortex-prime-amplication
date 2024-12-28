import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeatherServiceBase } from "./base/weather.service.base";

@Injectable()
export class WeatherService extends WeatherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
