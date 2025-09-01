import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    reporter: [['html', { outputFolder: 'html-report', open: 'never' }], ['json', { outputFile: 'html-report/test-results.json' }]],
    use: {
        headless: true,
        viewport: null,
        // viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        launchOptions: {
            slowMo: 500,
            args: ['--start-maximized'],
            // For debugging
            // devtools: true,
        },
    }
});
