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
import { Moon } from "./Moon";
import { MoonCountArgs } from "./MoonCountArgs";
import { MoonFindManyArgs } from "./MoonFindManyArgs";
import { MoonFindUniqueArgs } from "./MoonFindUniqueArgs";
import { CreateMoonArgs } from "./CreateMoonArgs";
import { UpdateMoonArgs } from "./UpdateMoonArgs";
import { DeleteMoonArgs } from "./DeleteMoonArgs";
import { MoonService } from "../moon.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Moon)
export class MoonResolverBase {
  constructor(
    protected readonly service: MoonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Moon",
    action: "read",
    possession: "any",
  })
  async _moonsMeta(
    @graphql.Args() args: MoonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Moon])
  @nestAccessControl.UseRoles({
    resource: "Moon",
    action: "read",
    possession: "any",
  })
  async moons(@graphql.Args() args: MoonFindManyArgs): Promise<Moon[]> {
    return this.service.moons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Moon, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Moon",
    action: "read",
    possession: "own",
  })
  async moon(@graphql.Args() args: MoonFindUniqueArgs): Promise<Moon | null> {
    const result = await this.service.moon(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Moon)
  @nestAccessControl.UseRoles({
    resource: "Moon",
    action: "create",
    possession: "any",
  })
  async createMoon(@graphql.Args() args: CreateMoonArgs): Promise<Moon> {
    return await this.service.createMoon({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Moon)
  @nestAccessControl.UseRoles({
    resource: "Moon",
    action: "update",
    possession: "any",
  })
  async updateMoon(@graphql.Args() args: UpdateMoonArgs): Promise<Moon | null> {
    try {
      return await this.service.updateMoon({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Moon)
  @nestAccessControl.UseRoles({
    resource: "Moon",
    action: "delete",
    possession: "any",
  })
  async deleteMoon(@graphql.Args() args: DeleteMoonArgs): Promise<Moon | null> {
    try {
      return await this.service.deleteMoon(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}