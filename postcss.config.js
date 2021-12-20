module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-selectors'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('postcss-preset-env')(
      {
        features: {'nesting-rules': false},
      },
      {stage: 1},
    ),
  ],
}
