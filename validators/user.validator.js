import joi from "joi";

const signUpValidationSchema = joi.object({
  name: joi.string().min(3).max(10).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export { signUpValidationSchema };
