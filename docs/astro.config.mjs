import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sandwich UI",
      editLink: {
        baseUrl: "https://github.com/MrSquaare/sandwich-ui/edit/main/docs/",
      },
      social: {
        github: "https://github.com/MrSquaare/sandwich-ui",
      },
      sidebar: [
        {
          label: "Guide",
          autogenerate: { directory: "guide" },
        },
      ],
    }),
  ],
});
