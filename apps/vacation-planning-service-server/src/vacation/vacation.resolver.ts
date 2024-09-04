import * as graphql from "@nestjs/graphql";
import { VacationResolverBase } from "./base/vacation.resolver.base";
import { Vacation } from "./base/Vacation";
import { VacationService } from "./vacation.service";

@graphql.Resolver(() => Vacation)
export class VacationResolver extends VacationResolverBase {
  constructor(protected readonly service: VacationService) {
    super(service);
  }
}
