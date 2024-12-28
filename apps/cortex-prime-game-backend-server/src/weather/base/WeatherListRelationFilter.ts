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
import { WeatherWhereInput } from "./WeatherWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WeatherListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WeatherWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherWhereInput)
  @IsOptional()
  @Field(() => WeatherWhereInput, {
    nullable: true,
  })
  every?: WeatherWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeatherWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherWhereInput)
  @IsOptional()
  @Field(() => WeatherWhereInput, {
    nullable: true,
  })
  some?: WeatherWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeatherWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherWhereInput)
  @IsOptional()
  @Field(() => WeatherWhereInput, {
    nullable: true,
  })
  none?: WeatherWhereInput;
}
export { WeatherListRelationFilter as WeatherListRelationFilter };