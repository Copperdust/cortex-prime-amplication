import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeatherModuleBase } from "./base/weather.module.base";
import { WeatherService } from "./weather.service";
import { WeatherController } from "./weather.controller";
import { WeatherResolver } from "./weather.resolver";

@Module({
  imports: [WeatherModuleBase, forwardRef(() => AuthModule)],
  controllers: [WeatherController],
  providers: [WeatherService, WeatherResolver],
  exports: [WeatherService],
})
export class WeatherModule {}
