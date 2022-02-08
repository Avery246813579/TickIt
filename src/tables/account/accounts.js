import {Scheme, Table} from "jssql";

export default new Table(
  "Accounts",
  new Scheme({
    ID: {
      AI: true,
      TYPE: "INT",
      INDEX: "PRIMARY KEY",
      NULL: false,
    },
    FIRST_NAME: {
      TYPE: "VARCHAR",
      NULL: false,
      LENGTH: 32,
    },
    LAST_NAME: {
      TYPE: "VARCHAR",
      NULL: false,
      LENGTH: 32,
    },
    EMAIL: {
      TYPE: "VARCHAR",
      LENGTH: 128,
    },
    PHONE: {
      TYPE: "VARCHAR",
      LENGTH: 16,
    },
    DATE_CREATED: {
      TYPE: "BIGINT",
      NULL: false,
      LENGTH: 16,
    },
    DATE_UPDATED: {
      TYPE: "BIGINT",
      NULL: false,
      LENGTH: 16,
    }
  })
);
