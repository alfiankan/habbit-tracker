import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HabbitsModuleBase } from "./base/habbits.module.base";
import { HabbitsService } from "./habbits.service";
import { HabbitsController } from "./habbits.controller";
import { HabbitsResolver } from "./habbits.resolver";

@Module({
  imports: [HabbitsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HabbitsController],
  providers: [HabbitsService, HabbitsResolver],
  exports: [HabbitsService],
})
export class HabbitsModule {}
