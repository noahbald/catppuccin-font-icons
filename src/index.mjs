import { copyFile, cp, readdir, rename, rm } from "node:fs/promises";

const unicodeMap = {
  angular: ["󰚿"],
  apple: ["", "", "", "󰀵", ""],
  arduiuno: [""],
  assembly: ["", ""],
  babel: ["󰨥", ""],
  bash: [""],
  binary: ["", ""],
  c: [""],
  clojure: [""],
  code_climate: [""],
  code_of_conduct: [""],
  coffeescript: [""],
  cpp: [""],
  csharp: ["󰪮", "󰌛"],
  css: [""],
  csv: [""],
  d: [""],
  dart: ["", ""],
  db: [""],
  dependabot: [""],
  diff: [""],
  django: [""],
  doc: ["󰈬"],
  docker: ["󰡨"],
  editorconfig: [""],
  elm: [""],
  ember: ["󰬰"],
  env: [""],
  erlang: [""],
  eslint: ["󰱺", ""],
  favicon: [""],
  file: ["󰈙"],
  firebase: ["󰥧", ""],
  folder: [""],
  folder__open: [""],
  font: ["", ""],
  fsharp: [""],
  gatsby: ["󰹃"],
  git: [""],
  gitlab: [""],
  go: ["󰟓", ""],
  godot: [""],
  gradle: [""],
  graphql: ["󰡷", ""],
  groovy: [""],
  haml: [""],
  haskell: ["", "", "󰲒"],
  haxe: [""],
  heroku: ["", ""],
  html: ["", "", "󰌝"],
  image: ["", ""],
  ionic: ["", ""],
  java: ["", "", "󰬷"],
  javascript: ["", "", "", "󰌞"],
  javascript_react: ["", "󰜈", ""],
  jinja: [""],
  json: ["", "", "󰘦"],
  julia: [""],
  key: ["", ""],
  kotlin: ["", "󱈙"],
  laravel: ["󰫐"],
  lib: [""],
  license: ["󰗑", ""],
  lisp: [""],
  log: ["󰌱"],
  lua: ["", "󰢱"],
  makefile: [""],
  markdown: ["", "", "", "", "󰍔", "󰽛"],
  maven: [""],
  nginx: [""],
  nim: [""],
  ninja: ["󰝴"],
  nix: ["󱄅", ""],
  npm: ["", "󰛷", ""],
  nunjucks: [""],
  nuxt: ["󱄆"],
  ocaml: [""],
  pdf: [""],
  perl: [""],
  php: [""],
  powershell: ["󰨊", "", ""],
  prisma: [""],
  properties: ["󰒓", ""],
  python: ["", "", "", "󰌠"],
  r: [""],
  reason: [""],
  rescript: [""],
  rollup: ["", "󰯀"],
  ruby: [""],
  rust: ["", "", "󱘗"],
  sass: [""],
  scala: ["", ""],
  search: ["", "", ""],
  spreadsheet: ["󰈛"],
  stylelint: [""],
  svelte: [""],
  svg: ["󰜡"],
  swift: ["", "", "󰛥"],
  tailwind: ["󱏿"],
  terraform: ["󱁢", ""],
  toml: [""],
  typescript: ["", "󰛦"],
  unity: ["󰚯", ""],
  v: [""],
  visual_studio: ["󰘐", "󰨞", ""],
  vue: ["", "󰡄"],
  web_assembly: [""],
  webpack: ["󰜫", ""],
  workflow: [""],
  xaml: ["󰙳"],
  xml: ["󰗀"],
  yarn: [""],
  zig: [""],
  zip: ["", "", ""],
};

const themes = ["frappe", "latte", "macchiato", "mocha"];

themes.forEach(async (theme) => {
  const themeDir = `./vscode-icons/themes/${theme}/icons`;
  const outputDir = `./themes/${theme}`;
  const icons = await readdir(themeDir);
  await rm(outputDir, { recursive: true, force: true });

  icons.forEach((icon) => {
    const [name] = icon.split(".");
    /** @type {string[] | undefined} */
    const nerdIcons = unicodeMap[name];
    if (!nerdIcons) return;

    const glyphs = nerdIcons
      .map((nerdIcon) =>
        nerdIcon
          .split("")
          .map((char) => `u${char.charCodeAt(0).toString(16).toUpperCase()}`)
          .join(""),
      )
      .join(",");
    cp(`${themeDir}/${icon}`, `${outputDir}/${glyphs}-${icon}`, {
      recursive: true,
    });
  });
});
