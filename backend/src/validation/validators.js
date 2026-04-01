export const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

export const escapeHTML = (str) =>
    str.replace(/[&<>'"]/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
    }[char]));


export const validateStringField = ({
    fieldName,
    value,
    min = 0,
    max = Infinity,
    regex = null,
    required = true,
    escape = false,
    transform = null,
}) => {
    const errors = [];
    let sanitizedValue = null;

    if (required && typeof value !== 'string') {
        errors.push({ field: fieldName, message: `${fieldName} is required and must be text.` });
        return { errors, sanitizedValue };
    }

    if (typeof value === 'string') {
        let val = value.trim();

        if (val.length < min || val.length > max) {
            errors.push({ field: fieldName, message: `${fieldName} must be between ${min} and ${max} characters.` });
        } else if (regex && !regex.test(val)) {
            errors.push({ field: fieldName, message: `${fieldName} contains invalid characters.` });
        } else {
            if (escape) val = escapeHTML(val);
            if (transform) val = transform(val);
            sanitizedValue = val;
        }
    }

    return { errors, sanitizedValue };
};
