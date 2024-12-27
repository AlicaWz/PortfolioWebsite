// This is only for providing the breakpoints on server side rendering and saving it into the astro context
// This is needed for the Picture component to know the breakpoints
// There is no other way to save the breakpoints on the server side (at least i dont know one)
import { defineMiddleware } from "astro:middleware";
import NodeCache from "node-cache";
import { getBreakpoints } from "@system/utils/helper";

const BreakpointCache = new NodeCache({ stdTTL: 300, checkperiod: 300 });

const breakpoints = defineMiddleware((context, next) => {
  // Check if locales are in cache
  const cachedBreakpoints: Record<string, number> | undefined =
    BreakpointCache.get("breakpoints");

  // Check if locales are in cache, if not fetch them from graphql
  if (!cachedBreakpoints) {
    console.info(
      "No cached breakpoints found, fetching new breakpoints from file",
    );
    const fileBreakpoints = getBreakpoints();
    context.locals.breakpoints = fileBreakpoints;
    BreakpointCache.mset([
      { key: "breakpoints", val: context.locals.breakpoints },
    ]);
  } else {
    context.locals.breakpoints = cachedBreakpoints;
  }

  return next();
});

export default breakpoints;
