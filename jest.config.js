module.exports = {
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    collectCoverageFrom: ['src/**/*.{js,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}