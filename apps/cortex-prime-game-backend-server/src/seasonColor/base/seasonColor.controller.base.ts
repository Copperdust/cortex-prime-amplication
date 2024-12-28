/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SeasonColorService } from "../seasonColor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SeasonColorCreateInput } from "./SeasonColorCreateInput";
import { SeasonColor } from "./SeasonColor";
import { SeasonColorFindManyArgs } from "./SeasonColorFindManyArgs";
import { SeasonColorWhereUniqueInput } from "./SeasonColorWhereUniqueInput";
import { SeasonColorUpdateInput } from "./SeasonColorUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SeasonColorControllerBase {
  constructor(
    protected readonly service: SeasonColorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SeasonColor })
  @nestAccessControl.UseRoles({
    resource: "SeasonColor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SeasonColorCreateInput,
  })
  async createSeasonColor(
    @common.Body() data: SeasonColorCreateInput
  ): Promise<SeasonColor> {
    return await this.service.createSeasonColor({
      data: data,
      select: {
        color: true,
        createdAt: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SeasonColor] })
  @ApiNestedQuery(SeasonColorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SeasonColor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async seasonColors(@common.Req() request: Request): Promise<SeasonColor[]> {
    const args = plainToClass(SeasonColorFindManyArgs, request.query);
    return this.service.seasonColors({
      ...args,
      select: {
        color: true,
        createdAt: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SeasonColor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SeasonColor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async seasonColor(
    @common.Param() params: SeasonColorWhereUniqueInput
  ): Promise<SeasonColor | null> {
    const result = await this.service.seasonColor({
      where: params,
      select: {
        color: true,
        createdAt: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SeasonColor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SeasonColor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SeasonColorUpdateInput,
  })
  async updateSeasonColor(
    @common.Param() params: SeasonColorWhereUniqueInput,
    @common.Body() data: SeasonColorUpdateInput
  ): Promise<SeasonColor | null> {
    try {
      return await this.service.updateSeasonColor({
        where: params,
        data: data,
        select: {
          color: true,
          createdAt: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SeasonColor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SeasonColor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSeasonColor(
    @common.Param() params: SeasonColorWhereUniqueInput
  ): Promise<SeasonColor | null> {
    try {
      return await this.service.deleteSeasonColor({
        where: params,
        select: {
          color: true,
          createdAt: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
