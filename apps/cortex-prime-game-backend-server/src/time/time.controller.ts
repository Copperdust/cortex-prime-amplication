import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeService } from "./time.service";
import { TimeControllerBase } from "./base/time.controller.base";

@swagger.ApiTags("times")
@common.Controller("times")
export class TimeController extends TimeControllerBase {
  constructor(
    protected readonly service: TimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
