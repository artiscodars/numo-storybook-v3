import type { StorybookConfig } from "@storybook/angular";
import path from "path";
const config: StorybookConfig = {
    stories: [
        "../src/stories/Configure.mdx",
        //  "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/angular",
        options: {},
    },
    staticDirs: ["../src/assets"], // Add this line
    webpackFinal: async (config) => {
        // PostCSS support is added by '@storybook/addon-postcss'
        return config;
    },
};
export default config;
