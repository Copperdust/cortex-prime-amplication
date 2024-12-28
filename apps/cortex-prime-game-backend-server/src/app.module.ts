import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CharacterModule } from "./character/character.module";
import { TrackerModule } from "./tracker/tracker.module";
import { TraitSetModule } from "./traitSet/traitSet.module";
import { TraitModule } from "./trait/trait.module";
import { ItemModule } from "./item/item.module";
import { ItemBonusModule } from "./itemBonus/itemBonus.module";
import { StatusModule } from "./status/status.module";
import { TimeModule } from "./time/time.module";
import { SeasonModule } from "./season/season.module";
import { WeatherModule } from "./weather/weather.module";
import { SeasonColorModule } from "./seasonColor/seasonColor.module";
import { MoonModule } from "./moon/moon.module";
import { ReminderModule } from "./reminder/reminder.module";
import { PlayerModule } from "./player/player.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    UserModule,
    CharacterModule,
    TrackerModule,
    TraitSetModule,
    TraitModule,
    ItemModule,
    ItemBonusModule,
    StatusModule,
    TimeModule,
    SeasonModule,
    WeatherModule,
    SeasonColorModule,
    MoonModule,
    ReminderModule,
    PlayerModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
