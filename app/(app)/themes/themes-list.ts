type ThemeProps = 'default' | 'zinc' | 'slate'
type ThemeVariables = {
  [key: string]: string
}
const themesList: Record<ThemeProps, { root: ThemeVariables; dark: ThemeVariables }> = {
  default: {
    root: {
      '--light': '0 0% 98.04%',
      '--dark': '240 10% 6%',
      '--background': '0 0% 100%',
      '--fg': '240 10% 3.9%',
      '--overlay': '0 0% 100%',
      '--overlay-fg': '240 10% 3.9%',
      '--primary': '216 98% 52%',
      '--primary-fg': '0 0% 100%',
      '--secondary': '240 4.8% 95.9%',
      '--secondary-fg': '240 5.9% 10%',
      '--tertiary': '0 0% 100%',
      '--tertiary-fg': '240 4% 16%',
      '--success': '152 69% 31%',
      '--success-fg': '0 0% 100%',
      '--info': '81.97 84.52% 67.06%',
      '--info-fg': '89.27 80.39% 10%',
      '--muted': '240 4.8% 95.9%',
      '--muted-fg': '240 3.8% 46.1%',
      '--danger': '0 72.22% 50.59%',
      '--danger-fg': '0 85.71% 97.25%',
      '--warning': '43.26 96.41% 56.27%',
      '--warning-fg': '20.91 91.67% 14.12%',
      '--border': '240 5.9% 90%',
      '--input': '240 5.9% 90%',
      '--ring': 'var(--primary)',
      '--toggle': '240 5% 84%',
      '--radius': '0.55rem'
    },
    dark: {
      '--background': '0 0% 0%',
      '--fg': '0 0% 98%',
      '--overlay': '240 6% 6%',
      '--overlay-fg': '0 0% 98%',
      '--secondary': '240 3.7% 15.9%',
      '--secondary-fg': '0 0% 98%',
      '--info': '84.91 100% 66.47%',
      '--info-fg': '120 100% 13.14%',
      '--tertiary': '240 10% 5.5%',
      '--tertiary-fg': '240 5% 96%',
      '--ring': 'var(--primary)',
      '--muted': '240 3.7% 15.9%',
      '--muted-fg': '240 5% 64.9%',
      '--toggle': '240 5% 26%',
      '--border': '240 7% 15%',
      '--input': '240 3.7% 15.9%'
    }
  },
  zinc: {
    root: {
      '--light': '0 0% 98.04%',
      '--dark': '240 10% 6%',
      '--background': '0 0% 100%',
      '--fg': '240 10% 3.9%',
      '--overlay': '0 0% 100%',
      '--overlay-fg': '240 10% 3.9%',
      '--primary': '240 10% 3.92%',
      '--primary-fg': '0 0% 98.04%',
      '--secondary': '240 4.8% 95.9%',
      '--secondary-fg': '240 5.9% 10%',
      '--tertiary': '0 0% 100%',
      '--tertiary-fg': '240 4% 16%',
      '--success': '152 69% 31%',
      '--success-fg': '0 0% 100%',
      '--muted': '240 4.8% 95.9%',
      '--muted-fg': '240 3.8% 46.1%',
      '--border': '240 5.9% 90%',
      '--input': '240 5.9% 90%',
      '--ring': 'var(--primary)',
      '--toggle': '240 5% 84%'
    },
    dark: {
      '--background': '0 0% 0%',
      '--fg': '0 0% 98%',
      '--overlay': '240 6% 6%',
      '--overlay-fg': '0 0% 98%',
      '--secondary': '240 3.7% 15.9%',
      '--secondary-fg': '0 0% 98%',
      '--tertiary': '240 10% 5.5%',
      '--tertiary-fg': '240 5% 96%',
      '--ring': 'var(--primary)',
      '--muted': '240 3.7% 15.9%',
      '--muted-fg': '240 5% 64.9%',
      '--toggle': '240 5% 26%',
      '--border': '240 7% 15%',
      '--input': '240 3.7% 15.9%'
    }
  },
  slate: {
    root: {
      '--light': '228.57 84% 4.9%',
      '--dark': '210 40% 98.04%',
      '--background': '0 0% 100%',
      '--fg': '228.57 84% 4.9%',
      '--overlay': '210 40% 98.04%',
      '--overlay-fg': '228.57 84% 4.9%',
      '--secondary': '210 40% 96.08%',
      '--secondary-fg': '228.57 84% 4.9%',
      '--border': '215.38 16.32% 46.86%',
      '--input': '212.73 26.83% 83.92%'
    },
    dark: {
      '--background': '228.57 84% 4.9%',
      '--fg': '210 40% 98.04%',
      '--overlay': '222.22 47.37% 11.18%',
      '--overlay-fg': '210 40% 96.08%',
      '--secondary': '222.22 47.37% 11.18%',
      '--secondary-fg': '210 40% 96.08%',
      '--border': '215 20.22% 65.1%',
      '--input': '215.29 25% 26.67%'
    }
  }
}

export type { ThemeProps }
export { themesList }
