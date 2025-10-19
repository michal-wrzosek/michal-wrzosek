/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            pre: {
              paddingTop: 0,
              paddingInlineEnd: 0,
              paddingBottom: 0,
              paddingInlineStart: 0,
            },
          },
        },
        xl: {
          css: {
            pre: {
              paddingTop: 0,
              paddingInlineEnd: 0,
              paddingBottom: 0,
              paddingInlineStart: 0,
            },
          },
        },
      }),
    },
  },
};
