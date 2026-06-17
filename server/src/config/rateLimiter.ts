import rateLimiter from "express-rate-limit"
import { success } from "zod"

export default function rateLimit() {
    return {
        generalRateLimit: () => (
            rateLimiter({
                limit: 5000,
                windowMs: 6000 * 15,
                legacyHeaders: false,
                standardHeaders: true,
                message: {
                    success: false,
                    message: "request time out, try again later"
                }
            })
        ),
        authRateLimit: () => (
            rateLimiter({
                limit: 5,
                windowMs: 6000 * 3,
                legacyHeaders: false,
                standardHeaders: true,
                message: {
                    success: false,
                    message: "lu mau ngapain sih"
                }
            })
        )
    }
}
