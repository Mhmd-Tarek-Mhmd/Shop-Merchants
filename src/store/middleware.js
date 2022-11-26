import { authedUserMiddleware } from "./slices/authedUser";

const middleware = [authedUserMiddleware.middleware];

export default middleware;
