import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HabbitsServiceBase } from "./base/habbits.service.base";

@Injectable()
export class HabbitsService extends HabbitsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
