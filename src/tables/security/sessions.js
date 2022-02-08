import {Scheme, Table} from "jssql";

export default new Table(
  "Sessions",
  new Scheme({
    ID: {
      AI: true,
      TYPE: "INT",
      INDEX: "PRIMARY KEY",
      NULL: false,
    },
    ACCOUNT_ID: {
      TYPE: "INT",
      NULL: false,
      FOREIGN: {
        key: "ID",
        table: "Accounts",
        onDelete: "CASCADE",
      },
    },
    UNIQUE_ID: {
      TYPE: "VARCHAR",
      NULL: false,
      LENGTH: 32,
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
    },
    DATE_EXPIRED: {
      TYPE: "BIGINT",
      LENGTH: 16,
    },
  })
);
