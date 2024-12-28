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
import { Status } from "./Status";
import { StatusCountArgs } from "./StatusCountArgs";
import { StatusFindManyArgs } from "./StatusFindManyArgs";
import { StatusFindUniqueArgs } from "./StatusFindUniqueArgs";
import { CreateStatusArgs } from "./CreateStatusArgs";
import { UpdateStatusArgs } from "./UpdateStatusArgs";
import { DeleteStatusArgs } from "./DeleteStatusArgs";
import { StatusService } from "../status.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Status)
export class StatusResolverBase {
  constructor(
    protected readonly service: StatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "read",
    possession: "any",
  })
  async _statusesMeta(
    @graphql.Args() args: StatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Status])
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "read",
    possession: "any",
  })
  async statuses(@graphql.Args() args: StatusFindManyArgs): Promise<Status[]> {
    return this.service.statuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Status, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "read",
    possession: "own",
  })
  async status(
    @graphql.Args() args: StatusFindUniqueArgs
  ): Promise<Status | null> {
    const result = await this.service.status(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Status)
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "create",
    possession: "any",
  })
  async createStatus(@graphql.Args() args: CreateStatusArgs): Promise<Status> {
    return await this.service.createStatus({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Status)
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "update",
    possession: "any",
  })
  async updateStatus(
    @graphql.Args() args: UpdateStatusArgs
  ): Promise<Status | null> {
    try {
      return await this.service.updateStatus({
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

  @graphql.Mutation(() => Status)
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "delete",
    possession: "any",
  })
  async deleteStatus(
    @graphql.Args() args: DeleteStatusArgs
  ): Promise<Status | null> {
    try {
      return await this.service.deleteStatus(args);
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
