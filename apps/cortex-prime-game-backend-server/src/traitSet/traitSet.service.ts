import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraitSetServiceBase } from "./base/traitSet.service.base";

@Injectable()
export class TraitSetService extends TraitSetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
