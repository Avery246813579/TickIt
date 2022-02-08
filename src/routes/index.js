import {setupEntryRoutes} from "./account/entry-routes";

/**
 * Sets up the routes for our API
 */
export function setupRouteHandler(app) {
  setupEntryRoutes(app);
}