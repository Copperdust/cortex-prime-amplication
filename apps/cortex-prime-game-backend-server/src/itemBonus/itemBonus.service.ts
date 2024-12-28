import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemBonusServiceBase } from "./base/itemBonus.service.base";

@Injectable()
export class ItemBonusService extends ItemBonusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
