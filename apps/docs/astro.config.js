import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/MrSquaare/sandwich-ui/edit/main/apps/docs/",
      },
      sidebar: [
        {
          items: [
            {
              autogenerate: {
                directory: "core",
              },
            },
          ],
          label: "@sandwich-ui/core",
        },
        {
          items: [
            {
              autogenerate: {
                directory: "react",
              },
            },
          ],
          label: "@sandwich-ui/react",
        },
      ],
      social: [
        {
          href: "https://github.com/MrSquaare/sandwich-ui",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Sandwich UI",
    }),
  ],
});
