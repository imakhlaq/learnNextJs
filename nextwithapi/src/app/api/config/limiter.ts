import { RateLimiter } from "limiter";

//limits the amount of req on server
export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});
