// "strict mode";
// import { use } from "browser-sync";
import { Dropbox } from "dropbox";
import fetch from "node-fetch";

const accessToken =
  "";

const dbx = new Dropbox({
  accessToken,
  fetch,
});

dbx
  .filesListFolder({
    path: "",
  })
  .then((response) => {
    console.log(response.result.entries);
  });
