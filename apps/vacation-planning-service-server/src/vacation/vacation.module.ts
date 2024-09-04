import { Module } from "@nestjs/common";
import { VacationModuleBase } from "./base/vacation.module.base";
import { VacationService } from "./vacation.service";
import { VacationController } from "./vacation.controller";
import { VacationResolver } from "./vacation.resolver";

@Module({
  imports: [VacationModuleBase],
  controllers: [VacationController],
  providers: [VacationService, VacationResolver],
  exports: [VacationService],
})
export class VacationModule {}
