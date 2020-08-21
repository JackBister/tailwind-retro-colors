import * as palettes from "../../tailwind-retro-colors";

const selectedButtonClasses = ["selected-palette-button", "bg-violet-400"];

(global as any).selectPalette = (paletteName: string) => {
  const palette: { [key: string]: { name: string; color: string }[] } = {};

  for (let k in palettes[paletteName]) {
    const split = k.split("-");
    const key = split[0];
    const obj = {
      name: k,
      color: palettes[paletteName][k],
    };
    if (palette[key]) {
      palette[key].push(obj);
    } else {
      palette[key] = [obj];
    }
  }

  const table = document.createElement("table");
  const thead = table.appendChild(document.createElement("thead"));
  const theadRow = thead.appendChild(document.createElement("tr"));
  const tbody = table.appendChild(document.createElement("tbody"));

  const tableRows: Node[] = [];

  const paletteKeys = Object.keys(palette);
  for (let i = 0; i < paletteKeys.length; i++) {
    const k = paletteKeys[i];
    const th = theadRow.appendChild(document.createElement("th"));
    th.innerText = k;

    for (let j = 0; j < palette[k].length; j++) {
      let tableRow: Node = null;
      if (tableRows.length < j + 1) {
        tableRow = tbody.appendChild(document.createElement("tr"));
        tableRows.push(tableRow);
      } else {
        tableRow = tableRows[j];
      }
      for (let k = tableRow.childNodes.length; k < i; k++) {
        tableRow.appendChild(document.createElement("td"));
      }
      const td = tableRow.appendChild(document.createElement("td"));
      td.style.backgroundColor = palette[k][j].color;
      td.classList.add("p-2");
      const tdText = td.appendChild(document.createElement("div"));
      tdText.innerText = palette[k][j].name;
      tdText.classList.add("name-text");
    }
  }

  const paletteTable = document.getElementById("paletteTable");
  paletteTable.innerHTML = "";
  paletteTable.appendChild(table);

  document
    .querySelectorAll(".selected-palette-button")
    .forEach((n) => n.classList.remove(...selectedButtonClasses));
  const selectedButton = document.getElementById(paletteName + "Button");
  selectedButton.classList.add(...selectedButtonClasses);
};

(global as any).scrollToTable = () => {
  const paletteTable = document.getElementById("paletteTable");
  paletteTable.scrollIntoView({ behavior: "smooth" });
};

function main() {
  (global as any).selectPalette("nes");
}

main();
