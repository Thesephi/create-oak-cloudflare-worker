import { Application } from "@oak/oak/application";
import { useOakServer, useOas } from "@dklab/oak-routing-ctrl";
import { CfwController } from "./CfwController";

const app = new Application();
useOakServer(app, [CfwController]);
useOas(app);
export default { fetch: app.fetch };
