import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                method: "alphabetical",
                // order: ['Introduction', 'Styleguide', 'Atoms', ['Readme', '*'], 'Molecules', ['Readme', '*'], 'Organisms', ['Readme', '*']],
                //  locales: 'en-US',
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: "light",
            values: [
                { name: "light", value: "#EFEFEF" },
                { name: "dark", value: "#000000" },
                // Add more backgrounds as needed
            ],
        },
    },
};

export default preview;
