import { sequence } from "astro:middleware";
import breakpoints from "@middlewares/breakpoints";

export const onRequest = sequence(breakpoints);
