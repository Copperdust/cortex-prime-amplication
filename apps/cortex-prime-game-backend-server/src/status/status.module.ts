import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatusModuleBase } from "./base/status.module.base";
import { StatusService } from "./status.service";
import { StatusController } from "./status.controller";
import { StatusResolver } from "./status.resolver";

@Module({
  imports: [StatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatusController],
  providers: [StatusService, StatusResolver],
  exports: [StatusService],
})
export class StatusModule {}
