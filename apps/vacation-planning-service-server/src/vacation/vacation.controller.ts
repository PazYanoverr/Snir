import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VacationService } from "./vacation.service";
import { VacationControllerBase } from "./base/vacation.controller.base";

@swagger.ApiTags("vacations")
@common.Controller("vacations")
export class VacationController extends VacationControllerBase {
  constructor(protected readonly service: VacationService) {
    super(service);
  }
}
