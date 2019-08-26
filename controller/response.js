export function newSuccessResponse(code, data) {
    return {
        type: "success",
        code: code,
        data: data
    };
}

export function newFailureResponse(code, data) {
    return {
        type: "failure",
        code: code,
        data: data
    };
}

export const responseCode = {
    auth:{
        login:{
            invalid_input: "auth/login/invalid_input",
            incorrect_info: "auth/login/incorrect_info",
            success:"auth/login/success"
        }
    }
}