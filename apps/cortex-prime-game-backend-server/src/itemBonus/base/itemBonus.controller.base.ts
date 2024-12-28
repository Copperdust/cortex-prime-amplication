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
import { ItemBonusService } from "../itemBonus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemBonusCreateInput } from "./ItemBonusCreateInput";
import { ItemBonus } from "./ItemBonus";
import { ItemBonusFindManyArgs } from "./ItemBonusFindManyArgs";
import { ItemBonusWhereUniqueInput } from "./ItemBonusWhereUniqueInput";
import { ItemBonusUpdateInput } from "./ItemBonusUpdateInput";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemBonusControllerBase {
  constructor(
    protected readonly service: ItemBonusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemBonus })
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ItemBonusCreateInput,
  })
  async createItemBonus(
    @common.Body() data: ItemBonusCreateInput
  ): Promise<ItemBonus> {
    return await this.service.createItemBonus({
      data: data,
      select: {
        bonus: true,
        createdAt: true,
        formula: true,
        id: true,
        isBonusReplace: true,
        isFormulaReplace: true,
        traitName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemBonus] })
  @ApiNestedQuery(ItemBonusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async itemBonuses(@common.Req() request: Request): Promise<ItemBonus[]> {
    const args = plainToClass(ItemBonusFindManyArgs, request.query);
    return this.service.itemBonuses({
      ...args,
      select: {
        bonus: true,
        createdAt: true,
        formula: true,
        id: true,
        isBonusReplace: true,
        isFormulaReplace: true,
        traitName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemBonus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async itemBonus(
    @common.Param() params: ItemBonusWhereUniqueInput
  ): Promise<ItemBonus | null> {
    const result = await this.service.itemBonus({
      where: params,
      select: {
        bonus: true,
        createdAt: true,
        formula: true,
        id: true,
        isBonusReplace: true,
        isFormulaReplace: true,
        traitName: true,
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
  @swagger.ApiOkResponse({ type: ItemBonus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ItemBonusUpdateInput,
  })
  async updateItemBonus(
    @common.Param() params: ItemBonusWhereUniqueInput,
    @common.Body() data: ItemBonusUpdateInput
  ): Promise<ItemBonus | null> {
    try {
      return await this.service.updateItemBonus({
        where: params,
        data: data,
        select: {
          bonus: true,
          createdAt: true,
          formula: true,
          id: true,
          isBonusReplace: true,
          isFormulaReplace: true,
          traitName: true,
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
  @swagger.ApiOkResponse({ type: ItemBonus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteItemBonus(
    @common.Param() params: ItemBonusWhereUniqueInput
  ): Promise<ItemBonus | null> {
    try {
      return await this.service.deleteItemBonus({
        where: params,
        select: {
          bonus: true,
          createdAt: true,
          formula: true,
          id: true,
          isBonusReplace: true,
          isFormulaReplace: true,
          traitName: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/items")
  @ApiNestedQuery(ItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async findItems(
    @common.Req() request: Request,
    @common.Param() params: ItemBonusWhereUniqueInput
  ): Promise<Item[]> {
    const query = plainToClass(ItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        isPublic: true,

        itemBonuses: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "update",
    possession: "any",
  })
  async connectItems(
    @common.Param() params: ItemBonusWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.updateItemBonus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "update",
    possession: "any",
  })
  async updateItems(
    @common.Param() params: ItemBonusWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.updateItemBonus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "ItemBonus",
    action: "update",
    possession: "any",
  })
  async disconnectItems(
    @common.Param() params: ItemBonusWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        disconnect: body,
      },
    };
    await this.service.updateItemBonus({
      where: params,
      data,
      select: { id: true },
    });
  }
}