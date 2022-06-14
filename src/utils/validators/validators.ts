export type ValidatorsFormsType = (values: string) => string | null

export const required: ValidatorsFormsType = values => {
    if (values) return undefined;
    return "Required";
}

export const maxLengthCreator = (maxlength: number): ValidatorsFormsType => (values) => {
    if (values.length > maxlength) return `Max length ${maxlength} symbols`;
    return undefined;
}