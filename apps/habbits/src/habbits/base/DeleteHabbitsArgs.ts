/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HabbitsWhereUniqueInput } from "./HabbitsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteHabbitsArgs {
  @ApiProperty({
    required: true,
    type: () => HabbitsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HabbitsWhereUniqueInput)
  @Field(() => HabbitsWhereUniqueInput, { nullable: false })
  where!: HabbitsWhereUniqueInput;
}

export { DeleteHabbitsArgs as DeleteHabbitsArgs };
