import {Scheme, Table} from "jssql";

export default new Table(
  "Passwords",
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
    CONTENT: {
      TYPE: "VARCHAR",
      NULL: false,
      LENGTH: 128,
    },
    SALT: {
      TYPE: "VARCHAR",
      NULL: false,
      LENGTH: 32,
    },
    DATE_CREATED: {
      TYPE: "BIGINT",
      NULL: false,
      LENGTH: 16,
    },
    DATE_ARCHIVED: {
      TYPE: "BIGINT",
      LENGTH: 16,
    },
  })
);
