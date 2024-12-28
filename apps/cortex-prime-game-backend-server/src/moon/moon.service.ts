import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MoonServiceBase } from "./base/moon.service.base";

@Injectable()
export class MoonService extends MoonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
