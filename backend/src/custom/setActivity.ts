import { Client, ActivityType } from "discord.js";
import { env } from "../env";

export function setActivity(client: Client) {
  client.user?.setPresence({
    activities: [{ name: env.ACTIVITY ?? "cute people", type: ActivityType.Watching }],
  });
}
