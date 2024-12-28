import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrackerServiceBase } from "./base/tracker.service.base";

@Injectable()
export class TrackerService extends TrackerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
