export type ThemeMode = 'light' | 'dark';
export type ThemeCategory =
  | 'bespokeThemes'
  | 'primaryColorsThemes'
  | 'daisyUIThemes'
  | 'greyscaleThemes'
  | 'customThemes';

export interface ThemeDefinition {
  name: string;
  category: ThemeCategory;
  symbol?: string;
  swatchColor?: string;
  light: { [key: string]: string };
  dark: { [key: string]: string };
}

export const defaultTheme = {
  name: 'AccountantAI',
  mode: 'light' as ThemeMode,
  category: 'bespokeThemes' as ThemeCategory,
};

export const bespokeThemes: ThemeDefinition[] = [
  {
    name: 'AccountantAI',
    category: 'bespokeThemes',
    swatchColor: '226 65% 32%',
    light: {
      '--background': '216 25% 98%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--popover': '0 0% 100%',
      '--popover-foreground': '222.2 84% 4.9%',
      '--primary': '226 65% 32%',
      '--primary-foreground': '0 0% 98%',
      '--secondary': '210 40% 96.1%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '210 40% 96.1%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '159 64% 52%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--destructive': '0 84.2% 60.2%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '214.3 31.8% 91.4%',
      '--input': '214.3 31.8% 91.4%',
      '--ring': '226 65% 32%',
    },
    dark: {
      '--background': '222.2 84% 4.9%',
      '--foreground': '0 0% 98%',
      '--card': '222.2 84% 4.9%',
      '--card-foreground': '0 0% 98%',
      '--popover': '222.2 84% 4.9%',
      '--popover-foreground': '0 0% 98%',
      '--primary': '0 0% 98%',
      '--primary-foreground': '226 65% 32%',
      '--secondary': '0 0% 14.9%',
      '--secondary-foreground': '0 0% 98%',
      '--muted': '0 0% 14.9%',
      '--muted-foreground': '0 0% 63.9%',
      '--accent': '159 64% 52%',
      '--accent-foreground': '0 0% 9%',
      '--destructive': '0 62.8% 30.6%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '0 0% 14.9%',
      '--input': '0 0% 14.9%',
      '--ring': '159 64% 52%',
    },
  },
];

export const primaryColorsThemes: ThemeDefinition[] = [];
export const daisyUIThemes: ThemeDefinition[] = [];
export const greyscaleThemes: ThemeDefinition[] = [];
export const customThemes: ThemeDefinition[] = [];

export const appThemes: Record<ThemeCategory, ThemeDefinition[]> = {
  bespokeThemes,
  primaryColorsThemes,
  daisyUIThemes,
  greyscaleThemes,
  customThemes,
};
