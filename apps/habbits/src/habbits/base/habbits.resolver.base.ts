/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Habbits } from "./Habbits";
import { HabbitsCountArgs } from "./HabbitsCountArgs";
import { HabbitsFindManyArgs } from "./HabbitsFindManyArgs";
import { HabbitsFindUniqueArgs } from "./HabbitsFindUniqueArgs";
import { CreateHabbitsArgs } from "./CreateHabbitsArgs";
import { UpdateHabbitsArgs } from "./UpdateHabbitsArgs";
import { DeleteHabbitsArgs } from "./DeleteHabbitsArgs";
import { User } from "../../user/base/User";
import { HabbitsService } from "../habbits.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Habbits)
export class HabbitsResolverBase {
  constructor(
    protected readonly service: HabbitsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Habbits",
    action: "read",
    possession: "any",
  })
  async _habbitsItemsMeta(
    @graphql.Args() args: HabbitsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Habbits])
  @nestAccessControl.UseRoles({
    resource: "Habbits",
    action: "read",
    possession: "any",
  })
  async habbitsItems(
    @graphql.Args() args: HabbitsFindManyArgs
  ): Promise<Habbits[]> {
    return this.service.habbitsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Habbits, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Habbits",
    action: "read",
    possession: "own",
  })
  async habbits(
    @graphql.Args() args: HabbitsFindUniqueArgs
  ): Promise<Habbits | null> {
    const result = await this.service.habbits(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Habbits)
  @nestAccessControl.UseRoles({
    resource: "Habbits",
    action: "create",
    possession: "any",
  })
  async createHabbits(
    @graphql.Args() args: CreateHabbitsArgs
  ): Promise<Habbits> {
    return await this.service.createHabbits({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Habbits)
  @nestAccessControl.UseRoles({
    resource: "Habbits",
    action: "update",
    possession: "any",
  })
  async updateHabbits(
    @graphql.Args() args: UpdateHabbitsArgs
  ): Promise<Habbits | null> {
    try {
      return await this.service.updateHabbits({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Habbits)
  @nestAccessControl.UseRoles({
    resource: "Habbits",
    action: "delete",
    possession: "any",
  })
  async deleteHabbits(
    @graphql.Args() args: DeleteHabbitsArgs
  ): Promise<Habbits | null> {
    try {
      return await this.service.deleteHabbits(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Habbits): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}