module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/tests/**/*.test.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
  "src/**/*.ts",
  ],

  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
