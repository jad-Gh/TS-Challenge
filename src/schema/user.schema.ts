import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
body:object({
    name:string({required_error:"Name is required"}),
    password:string({required_error:"password is required"}).min(6,"Password is too short"),
    passwordConfirmation:string({required_error:"password confirmed is required"}),
    email:string({required_error:"Email is required"}).email("Valid email is required"),
}).refine((data)=>{data.password===data.passwordConfirmation},{
    message:"Passwords do not match",
    path:["passwordConfirmation"]
})
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;