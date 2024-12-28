import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeServiceBase } from "./base/time.service.base";

@Injectable()
export class TimeService extends TimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
