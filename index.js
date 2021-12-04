import { Dropbox } from "dropbox";
import fetch from "node-fetch";

const accessToken =
  "fxe09PHf-iMAAAAAAAAAAYfY0VggObi276evWgDWyOqp4xTD4jDNgb76oie6fKCN";

const dbx = new Dropbox({
  accessToken,
  fetch,
});

dbx
  .filesListFolder({
    path: "",
  })
  .then((response) => console.log(response.result.entries[0]));
