import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VacationServiceBase } from "./base/vacation.service.base";

@Injectable()
export class VacationService extends VacationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
