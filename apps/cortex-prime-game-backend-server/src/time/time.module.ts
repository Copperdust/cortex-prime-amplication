import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeModuleBase } from "./base/time.module.base";
import { TimeService } from "./time.service";
import { TimeController } from "./time.controller";
import { TimeResolver } from "./time.resolver";

@Module({
  imports: [TimeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeController],
  providers: [TimeService, TimeResolver],
  exports: [TimeService],
})
export class TimeModule {}
