import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      tabletL: string;
      NoteBook: string;
    };
  }
}
