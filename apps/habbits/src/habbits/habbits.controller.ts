import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HabbitsService } from "./habbits.service";
import { HabbitsControllerBase } from "./base/habbits.controller.base";

@swagger.ApiTags("habbits")
@common.Controller("habbits")
export class HabbitsController extends HabbitsControllerBase {
  constructor(
    protected readonly service: HabbitsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
