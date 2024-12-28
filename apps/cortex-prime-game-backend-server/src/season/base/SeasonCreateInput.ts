/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TimeWhereUniqueInput } from "../../time/base/TimeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SeasonCreateInput {
  @ApiProperty({
    required: false,
    type: () => TimeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeWhereUniqueInput, {
    nullable: true,
  })
  time?: TimeWhereUniqueInput | null;
}

export { SeasonCreateInput as SeasonCreateInput };
