declare global {
    interface Leaderboard {
        rank: string,
        username: string,
        best_attempt: number
    }

    interface ResBody {
        success: boolean
        message: string
        data?: any
        result?: any
    }

    interface GameResult {
        rank?: string | number
        attempt?: number
    }

    namespace Express {
        interface Request {
            user: {
                id: number
                username: string
            }
        }
    }
}

export = {}