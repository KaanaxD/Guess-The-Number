declare global{
    interface Leaderboard{
        rank: string,
        username: string,
        best_attempt: number
    }
    namespace Express{
        interface Request{
        user: {
            id: number
            username: string
        }
    }
    }
}

export = {}