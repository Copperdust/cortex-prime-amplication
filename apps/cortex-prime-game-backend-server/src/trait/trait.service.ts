import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraitServiceBase } from "./base/trait.service.base";

@Injectable()
export class TraitService extends TraitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
