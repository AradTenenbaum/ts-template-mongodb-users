// VALIDATION
const Joi = require("joi");
import type {UserType} from './types';

// User Validation
const userValidation = (data: UserType)=> {
   
    // VALIDATION SCHEMA
    const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};



module.exports.userValidation = userValidation;
