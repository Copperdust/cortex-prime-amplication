import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReminderModuleBase } from "./base/reminder.module.base";
import { ReminderService } from "./reminder.service";
import { ReminderController } from "./reminder.controller";
import { ReminderResolver } from "./reminder.resolver";

@Module({
  imports: [ReminderModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReminderController],
  providers: [ReminderService, ReminderResolver],
  exports: [ReminderService],
})
export class ReminderModule {}
