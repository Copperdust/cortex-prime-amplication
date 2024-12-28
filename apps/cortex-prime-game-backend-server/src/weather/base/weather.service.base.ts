/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Weather as PrismaWeather } from "@prisma/client";

export class WeatherServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WeatherCountArgs, "select">): Promise<number> {
    return this.prisma.weather.count(args);
  }

  async weathers(args: Prisma.WeatherFindManyArgs): Promise<PrismaWeather[]> {
    return this.prisma.weather.findMany(args);
  }
  async weather(
    args: Prisma.WeatherFindUniqueArgs
  ): Promise<PrismaWeather | null> {
    return this.prisma.weather.findUnique(args);
  }
  async createWeather(args: Prisma.WeatherCreateArgs): Promise<PrismaWeather> {
    return this.prisma.weather.create(args);
  }
  async updateWeather(args: Prisma.WeatherUpdateArgs): Promise<PrismaWeather> {
    return this.prisma.weather.update(args);
  }
  async deleteWeather(args: Prisma.WeatherDeleteArgs): Promise<PrismaWeather> {
    return this.prisma.weather.delete(args);
  }
}
