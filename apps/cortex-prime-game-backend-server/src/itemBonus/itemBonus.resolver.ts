import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemBonusResolverBase } from "./base/itemBonus.resolver.base";
import { ItemBonus } from "./base/ItemBonus";
import { ItemBonusService } from "./itemBonus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemBonus)
export class ItemBonusResolver extends ItemBonusResolverBase {
  constructor(
    protected readonly service: ItemBonusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
