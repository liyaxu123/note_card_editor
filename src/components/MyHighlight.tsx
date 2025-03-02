import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { type BundledTheme } from "shiki";

export enum themeEnum {
  andromeeda = "andromeeda",
  auroraX = "aurora-x",
  ayuDark = "ayu-dark",
  catppuccinFrappe = "catppuccin-frappe",
  catppuccinLatte = "catppuccin-latte",
  catppuccinMacchiato = "catppuccin-macchiato",
  catppuccinMocha = "catppuccin-mocha",
  darkPlus = "dark-plus",
  dracula = "dracula",
  draculaSoft = "dracula-soft",
  everforestDark = "everforest-dark",
  everforestLight = "everforest-light",
  githubDark = "github-dark",
  githubDarkDefault = "github-dark-default",
  githubDarkDimmed = "github-dark-dimmed",
  githubDarkHighContrast = "github-dark-high-contrast",
  githubLight = "github-light",
  githubLightDefault = "github-light-default",
  githubLightHighContrast = "github-light-high-contrast",
  houston = "houston",
  kanagawaDragon = "kanagawa-dragon",
  kanagawaLotus = "kanagawa-lotus",
  kanagawaWave = "kanagawa-wave",
  laserwave = "laserwave",
  lightPlus = "light-plus",
  materialTheme = "material-theme",
  materialThemeDarker = "material-theme-darker",
  materialThemeLighter = "material-theme-lighter",
  materialThemeOcean = "material-theme-ocean",
  materialThemePalenight = "material-theme-palenight",
  minDark = "min-dark",
  minLight = "min-light",
  monokai = "monokai",
  nightOwl = "night-owl",
  nord = "nord",
  oneDarkPro = "one-dark-pro",
  oneLight = "one-light",
  plastic = "plastic",
  poimandres = "poimandres",
  red = "red",
  rosePine = "rose-pine",
  rosePineDawn = "rose-pine-dawn",
  rosePineMoon = "rose-pine-moon",
  slackDark = "slack-dark",
  slackOchin = "slack-ochin",
  snazzyLight = "snazzy-light",
  solarizedDark = "solarized-dark",
  solarizedLight = "solarized-light",
  synthwave84 = "synthwave-84",
  tokyoNight = "tokyo-night",
  vesper = "vesper",
  vitesseBlack = "vitesse-black",
  vitesseDark = "vitesse-dark",
  vitesseLight = "vitesse-light",
}

type Props = {
  code: string;
  lang?: string;
  theme?: BundledTheme;
};

const MyHighlight: React.FC<Props> = ({
  code,
  lang = "python",
  theme = "vitesse-dark",
}) => {
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const highlightCode = async () => {
      try {
        setLoading(true);
        const htmlString = await codeToHtml(code, {
          lang,
          theme,
        });
        setHtml(htmlString);
      } catch (err) {
        setError(err instanceof Error ? err.message : "代码高亮出错");
      } finally {
        setLoading(false);
      }
    };

    highlightCode();
  }, [code, lang, theme]);

  if (loading) {
    return <div className="p-4 text-white bg-black">加载中...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 bg-black">{error}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default MyHighlight;
