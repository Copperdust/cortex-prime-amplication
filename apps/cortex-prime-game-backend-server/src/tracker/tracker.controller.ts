import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrackerService } from "./tracker.service";
import { TrackerControllerBase } from "./base/tracker.controller.base";

@swagger.ApiTags("trackers")
@common.Controller("trackers")
export class TrackerController extends TrackerControllerBase {
  constructor(
    protected readonly service: TrackerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
