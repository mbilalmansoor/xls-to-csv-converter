# 📄 XLS to CSV Converter

Ultra-fast converter for legacy ASP.NET XLS reports to CSV using Node.js streaming parser. Designed to handle large files efficiently without loading everything into memory.

---

## 🔧 Features
- ✅ Converts `.xls` files from old ASP.NET systems to clean `.csv`.
- ✅ Handles large files with streaming parsing.
- ✅ Cleans cells (trims spaces, removes commas) to ensure CSV integrity.
- ✅ Minimal memory footprint and high-speed performance.

---

## 🛠 Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![DotNet](https://img.shields.io/badge/ASP.NET-512BD4?style=flat&logo=dotnet&logoColor=white)
![Excel](https://img.shields.io/badge/Excel-217346?style=flat&logo=microsoft-excel&logoColor=white)

---

## ⚡ Usage

1. Place your `.xls` file in the project folder.
2. Update the `FILE_NAME` variable to match your file:

```javascript
const FILE_NAME = "Report.xls";
