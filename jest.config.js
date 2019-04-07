module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  setupFiles: [],
  globals: {
    __PATH_PREFIX__: ``,
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.test.json"
    }
  }
};
