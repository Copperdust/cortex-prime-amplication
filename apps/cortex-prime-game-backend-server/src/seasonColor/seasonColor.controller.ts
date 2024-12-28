import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SeasonColorService } from "./seasonColor.service";
import { SeasonColorControllerBase } from "./base/seasonColor.controller.base";

@swagger.ApiTags("seasonColors")
@common.Controller("seasonColors")
export class SeasonColorController extends SeasonColorControllerBase {
  constructor(
    protected readonly service: SeasonColorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
