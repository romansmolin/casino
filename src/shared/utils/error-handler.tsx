interface ApiError {
    message: string
    code?: string
    originalError?: any
}

const handleError = (error: any, context: string): ApiError => {
    console.error(`Error in ${context}:`, error)

    if (error?.graphQLErrors?.length > 0) {
        return {
            message: error.graphQLErrors[0].message,
            code: error.graphQLErrors[0].extensions?.code,
            originalError: error,
        }
    }

    if (error?.networkError) {
        return {
            message: 'Network error occurred',
            code: 'NETWORK_ERROR',
            originalError: error,
        }
    }

    return {
        message: error?.message || 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR',
        originalError: error,
    }
}

export { handleError }
export type { ApiError }
