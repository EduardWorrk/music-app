

// jest.config.js
module.exports = {
  moduleNameMapper: {
    "^locales(.*)$": "<rootDir>/src/locales/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
