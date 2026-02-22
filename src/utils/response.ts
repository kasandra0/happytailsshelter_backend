export function successResponse(message: string, data?: unknown) {
    return {
        success: true,
        message,
        data,
    };
}

export function errorResponse(message: string) {
    return {
        success: false,
        message,
    };
}