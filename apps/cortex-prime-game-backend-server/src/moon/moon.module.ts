import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MoonModuleBase } from "./base/moon.module.base";
import { MoonService } from "./moon.service";
import { MoonController } from "./moon.controller";
import { MoonResolver } from "./moon.resolver";

@Module({
  imports: [MoonModuleBase, forwardRef(() => AuthModule)],
  controllers: [MoonController],
  providers: [MoonService, MoonResolver],
  exports: [MoonService],
})
export class MoonModule {}
