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
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { SeasonCreateNestedManyWithoutTimesInput } from "./SeasonCreateNestedManyWithoutTimesInput";
import { Type } from "class-transformer";

@InputType()
class TimeCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPaused?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => SeasonCreateNestedManyWithoutTimesInput,
  })
  @ValidateNested()
  @Type(() => SeasonCreateNestedManyWithoutTimesInput)
  @IsOptional()
  @Field(() => SeasonCreateNestedManyWithoutTimesInput, {
    nullable: true,
  })
  seasons?: SeasonCreateNestedManyWithoutTimesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  seconds?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  secondsPerSecond?: string | null;
}

export { TimeCreateInput as TimeCreateInput };