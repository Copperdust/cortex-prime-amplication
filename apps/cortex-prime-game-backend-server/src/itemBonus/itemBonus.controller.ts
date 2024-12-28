import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemBonusService } from "./itemBonus.service";
import { ItemBonusControllerBase } from "./base/itemBonus.controller.base";

@swagger.ApiTags("itemBonuses")
@common.Controller("itemBonuses")
export class ItemBonusController extends ItemBonusControllerBase {
  constructor(
    protected readonly service: ItemBonusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
