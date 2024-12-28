import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemBonusModuleBase } from "./base/itemBonus.module.base";
import { ItemBonusService } from "./itemBonus.service";
import { ItemBonusController } from "./itemBonus.controller";
import { ItemBonusResolver } from "./itemBonus.resolver";

@Module({
  imports: [ItemBonusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemBonusController],
  providers: [ItemBonusService, ItemBonusResolver],
  exports: [ItemBonusService],
})
export class ItemBonusModule {}
