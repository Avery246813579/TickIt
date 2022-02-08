import {Database} from "jssql";

const localDatabase = new Database({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "tickit",
});

export function setupTableHandler() {
  localDatabase.table([
    /** Account Tables **/
    require("./account/accounts").default,

    require("./security/sessions").default,
    require("./security/passwords").default,
  ]);

  console.log("We setup the tables");
}
