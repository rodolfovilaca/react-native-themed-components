module.exports = {
    coverageReporters: [
        "text",
        "lcov",
        "html"
    ],
    clearMocks: true,
    coverageDirectory: "coverage",
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    moduleFileExtensions: [
        'ts',
        'js',
    ],
    modulePathIgnorePatterns: [
        'd.ts'
    ]
};
