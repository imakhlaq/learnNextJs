import { RateLimiter } from "limiter";

//limits the amount of req on server
export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});
// if there is one instance of limiter than all the places you use this instant will share the same limiter.
// if you want different limiter for different routes create more instance of limiter for it
