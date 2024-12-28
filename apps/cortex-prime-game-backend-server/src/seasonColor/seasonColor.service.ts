import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeasonColorServiceBase } from "./base/seasonColor.service.base";

@Injectable()
export class SeasonColorService extends SeasonColorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
