console.log(">>> Loading postcss.config.cjs");

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
  plugins: [
    // OPTION 1: Adding the plugin with invocation
    tailwindcss(),

    // OPTION 2: Adding the plugin without invocation
    // tailwindcss,

    // But others, like autoprefixer, need to run after,
    autoprefixer(),
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};

module.exports = config;
