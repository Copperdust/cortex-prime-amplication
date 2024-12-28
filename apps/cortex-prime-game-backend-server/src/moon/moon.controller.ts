import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MoonService } from "./moon.service";
import { MoonControllerBase } from "./base/moon.controller.base";

@swagger.ApiTags("moons")
@common.Controller("moons")
export class MoonController extends MoonControllerBase {
  constructor(
    protected readonly service: MoonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
