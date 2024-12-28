import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SeasonColorModuleBase } from "./base/seasonColor.module.base";
import { SeasonColorService } from "./seasonColor.service";
import { SeasonColorController } from "./seasonColor.controller";
import { SeasonColorResolver } from "./seasonColor.resolver";

@Module({
  imports: [SeasonColorModuleBase, forwardRef(() => AuthModule)],
  controllers: [SeasonColorController],
  providers: [SeasonColorService, SeasonColorResolver],
  exports: [SeasonColorService],
})
export class SeasonColorModule {}
