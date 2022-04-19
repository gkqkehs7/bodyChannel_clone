// const calcRem = size => `${size / 16}rem`

// const fontSizes = {
// 	small: calcRem(14),
// 	base: calcRem(16),
// 	lg: calcRem(18),
// 	xl: calcRem(20),
// 	xxl: calcRem(22),
// 	xxxl: calcRem(24),
// 	big: calcRem(30),
// 	subTitleSize: calcRem(35),
// 	titleSize: calcRem(40)
// }

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletL: '992px',
  NoteBook: '1200px',
};

const theme = {
  device: {
    mobileS: `only screen and (min-width: ${deviceSizes.mobileS})`,
    mobileM: `only screen and (min-width: ${deviceSizes.mobileM})`,
    mobileL: `only screen and (min-width: ${deviceSizes.mobileL})`,
    tablet: `only screen and (min-width: ${deviceSizes.tablet})`,
    tabletL: `only screen and (min-width: ${deviceSizes.tabletL})`,
    NoteBook: `only screen and (min-width: ${deviceSizes.NoteBook})`,
  },
};

export default theme;
