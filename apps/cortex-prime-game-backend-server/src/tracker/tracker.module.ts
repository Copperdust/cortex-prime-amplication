import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrackerModuleBase } from "./base/tracker.module.base";
import { TrackerService } from "./tracker.service";
import { TrackerController } from "./tracker.controller";
import { TrackerResolver } from "./tracker.resolver";

@Module({
  imports: [TrackerModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrackerController],
  providers: [TrackerService, TrackerResolver],
  exports: [TrackerService],
})
export class TrackerModule {}
