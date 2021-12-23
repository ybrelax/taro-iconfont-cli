import fs from "fs";
import { getConfig } from "./getConfig";
import path from "path";

export const getTemplate = (fileName: string) => {
  const config = getConfig();
  const isVue = config.lang === "vue";

  if (isVue) {
    return fs
    .readFileSync(path.join(__dirname, `../templates/vue/${fileName}.template`))
    .toString();
  } else {
    return fs
    .readFileSync(path.join(__dirname, `../templates/${fileName}.template`))
    .toString();
  }


};
