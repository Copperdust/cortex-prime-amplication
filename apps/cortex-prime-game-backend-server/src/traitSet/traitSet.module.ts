import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TraitSetModuleBase } from "./base/traitSet.module.base";
import { TraitSetService } from "./traitSet.service";
import { TraitSetController } from "./traitSet.controller";
import { TraitSetResolver } from "./traitSet.resolver";

@Module({
  imports: [TraitSetModuleBase, forwardRef(() => AuthModule)],
  controllers: [TraitSetController],
  providers: [TraitSetService, TraitSetResolver],
  exports: [TraitSetService],
})
export class TraitSetModule {}
