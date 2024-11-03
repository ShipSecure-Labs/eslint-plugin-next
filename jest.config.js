// jest.config.js
module.exports = {
  preset: "ts-jest", // Use ts-jest to handle TypeScript files
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.test.ts"], // Matches .test.ts files in /tests folder
  moduleFileExtensions: ["ts", "js", "json"], // Recognizes .ts, .js, and .json files
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json", // Path to your tsconfig file
    },
  },
  roots: ["<rootDir>"], // Specifies the root directory for the project
  modulePaths: ["<rootDir>"], // Specifies the root directory for the project
};
