import {Scheme, Table} from "jssql";

export default new Table(
  "Test",
  new Scheme({
    ID: {
      AI: true,
      TYPE: "INT",
      INDEX: "PRIMARY KEY",
      NULL: false,
    },
    NAME: {
      type: "VARCHAR",
      length: 100,
    },
  })
);
