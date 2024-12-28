/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Status as PrismaStatus } from "@prisma/client";

export class StatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StatusCountArgs, "select">): Promise<number> {
    return this.prisma.status.count(args);
  }

  async statuses(args: Prisma.StatusFindManyArgs): Promise<PrismaStatus[]> {
    return this.prisma.status.findMany(args);
  }
  async status(
    args: Prisma.StatusFindUniqueArgs
  ): Promise<PrismaStatus | null> {
    return this.prisma.status.findUnique(args);
  }
  async createStatus(args: Prisma.StatusCreateArgs): Promise<PrismaStatus> {
    return this.prisma.status.create(args);
  }
  async updateStatus(args: Prisma.StatusUpdateArgs): Promise<PrismaStatus> {
    return this.prisma.status.update(args);
  }
  async deleteStatus(args: Prisma.StatusDeleteArgs): Promise<PrismaStatus> {
    return this.prisma.status.delete(args);
  }
}
