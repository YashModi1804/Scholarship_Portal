import { createError } from "../error.js";


const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message = "Fill the input properly";
        const extraDetails = err.errors[0].message;

        // console.log(error);
        next((createError(422, extraDetails)));
    }
}

export default validate;