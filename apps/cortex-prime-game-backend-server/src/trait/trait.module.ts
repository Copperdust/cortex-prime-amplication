import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TraitModuleBase } from "./base/trait.module.base";
import { TraitService } from "./trait.service";
import { TraitController } from "./trait.controller";
import { TraitResolver } from "./trait.resolver";

@Module({
  imports: [TraitModuleBase, forwardRef(() => AuthModule)],
  controllers: [TraitController],
  providers: [TraitService, TraitResolver],
  exports: [TraitService],
})
export class TraitModule {}
