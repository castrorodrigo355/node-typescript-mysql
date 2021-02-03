import fs from "fs";

export const createFileTxt = (base: number) => {
  return new Promise((resolve, reject) => {
    let data = "";
    for (let i = 1; i <= 10; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    const fileName: string = `tabla-${base}.txt`;

    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileName);
      }
    });
  });
};