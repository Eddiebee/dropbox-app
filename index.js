// "strict mode";
// import { use } from "browser-sync";
import { Dropbox } from "dropbox";
import fetch from "node-fetch";

const accessToken =
  "CYZrovPe4vkAAAAAAAAAAZ6qjVYMvegtTPXx2XodmTmTiN5Teqq_41A06vlh8q2S";

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
