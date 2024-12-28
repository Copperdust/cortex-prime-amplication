import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SeasonColorResolverBase } from "./base/seasonColor.resolver.base";
import { SeasonColor } from "./base/SeasonColor";
import { SeasonColorService } from "./seasonColor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SeasonColor)
export class SeasonColorResolver extends SeasonColorResolverBase {
  constructor(
    protected readonly service: SeasonColorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
