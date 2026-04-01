import { isPlainObject, validateStringField, escapeHTML } from "./validators.js";


export const registrationInputValidation = (inputData) => {
    if (!isPlainObject(inputData)) {
        return {
            success: false,
            data: null,
            errors: [{ field: 'payload', message: 'Invalid input format. Expected a JSON object.' }],
        };
    }

    const errors = [];
    const sanitizedData = {};


    const usernameResult = validateStringField({
        fieldName: 'username',
        value: inputData.username,
        min: 3,
        max: 30,
        regex: /^[a-zA-Z0-9_]+$/,
    });
    errors.push(...usernameResult.errors);
    if (usernameResult.sanitizedValue) sanitizedData.username = usernameResult.sanitizedValue;

    const displayNameResult = validateStringField({
        fieldName: 'displayName',
        value: inputData.displayName,
        min: 1,
        max: 50,
        escape: true,
    });
    errors.push(...displayNameResult.errors);
    if (displayNameResult.sanitizedValue) sanitizedData.displayName = displayNameResult.sanitizedValue;


    const emailResult = validateStringField({
        fieldName: 'email',
        value: inputData.email,
        max: 254,
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        transform: (val) => val.toLowerCase(),
    });
    errors.push(...emailResult.errors);
    if (emailResult.sanitizedValue) sanitizedData.email = emailResult.sanitizedValue;


    const passwordResult = validateStringField({
        fieldName: 'pass',
        value: inputData.pass,
        min: 8,
        max: 150,
    });
    errors.push(...passwordResult.errors);
    if (passwordResult.sanitizedValue) sanitizedData.pass = passwordResult.sanitizedValue;


    if ('otp' in inputData) {
        const otpResult = validateStringField({
            fieldName: 'otp',
            value: inputData.otp,
            min: 4,
            max: 6,
            regex: /^[0-9]+$/,
            required: true,
        });
        errors.push(...otpResult.errors);
        if (otpResult.sanitizedValue) sanitizedData.otp = otpResult.sanitizedValue;
    }

    if (errors.length > 0) {
        return { success: false, data: null, errors };
    }

    return { success: true, data: sanitizedData, errors: null };
};
