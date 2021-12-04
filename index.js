import { Dropbox } from "dropbox";

const accessToken = "ac1jgkyjh9l5j0p";

const dbx = new Dropbox({ accessToken, fetch });

dbx
  .filesListFolder({
    path: "",
  })
  .then((reponse) => console.log(response));
