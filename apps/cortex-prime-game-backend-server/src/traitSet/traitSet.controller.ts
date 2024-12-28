import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TraitSetService } from "./traitSet.service";
import { TraitSetControllerBase } from "./base/traitSet.controller.base";

@swagger.ApiTags("traitSets")
@common.Controller("traitSets")
export class TraitSetController extends TraitSetControllerBase {
  constructor(
    protected readonly service: TraitSetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
