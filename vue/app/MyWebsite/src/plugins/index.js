/**
 * plugins/index.js
 * included in `@/main.js`
 */

// Plugins
import vuetify from "@/plugins/vuetify";
import router from "@/router";

export function registerPlugins(app) {
  app.use(vuetify).use(router);
}