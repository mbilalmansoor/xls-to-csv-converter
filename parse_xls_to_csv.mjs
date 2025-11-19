import fs from "fs";
import { Parser } from "htmlparser2";

// 👇 Bare minimum change: use a variable for the file name
const inputFile = "Report.xls";
const outputFile = inputFile.replace(".xls", ".csv");

console.log(`📂 Streaming and parsing ${inputFile} ...`);

const output = fs.createWriteStream(outputFile);

let isInCell = false;
let currentRow = [];
let currentCellText = "";

const parser = new Parser({
  onopentag(name) {
    if (name === "tr") {
      currentRow = [];
    }
    if (name === "td" || name === "th") {
      isInCell = true;
      currentCellText = "";
    }
  },
  ontext(text) {
    if (isInCell) {
      currentCellText += text;
    }
  },
  onclosetag(name) {
    if (name === "td" || name === "th") {
      isInCell = false;
      const cleaned = currentCellText.trim().replace(/,/g, "");
      currentRow.push(cleaned);
    }
    if (name === "tr") {
      output.write(currentRow.join(",") + "\n");
    }
  },
  onerror(err) {
    console.error("Parsing error:", err);
    process.exit(1);
  },
  onend() {
    console.log(`✅ Done! Saved as ${outputFile}`);
  }
});

const stream = fs.createReadStream(inputFile, "utf8");

stream.on("data", chunk => parser.write(chunk));
stream.on("end", () => parser.end());
stream.on("error", err => {
  console.error("Read stream error:", err);
  process.exit(1);
});
