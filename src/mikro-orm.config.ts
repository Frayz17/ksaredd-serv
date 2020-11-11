import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  entities: [Post],
  dbName: "ksaredd",
  type: "postgresql",
  debug: !__prod__,
  user: "ksar",
  password: "1788eight",
} as Parameters<typeof MikroORM.init>[0];
