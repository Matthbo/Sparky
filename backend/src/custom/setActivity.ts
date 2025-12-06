import { Client, ActivityType } from "discord.js";
import { env } from "../env.js";
import { DAYS } from "../utils.js";

export function setActivity(client: Client) {
  console.log("[SET ACTIVITY LOOP] Setting activity to", env.ACTIVITY ?? "Serving cute people");
  client.user?.setPresence({
    activities: [{ name: env.ACTIVITY ?? "Serving cute people", type: ActivityType.Custom }],
  });
}

const LOOP_INTERVAL = 1 * DAYS;
export function runSetActivityLoop(client: Client) {
  console.log("[SET ACTIVITY LOOP] Setting activity");
  setActivity(client);
  setTimeout(() => runSetActivityLoop(client), LOOP_INTERVAL);
}
