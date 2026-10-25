# ui-starter

`packages/ui` is the catalog: tokens, components, and Storybook. `apps/web` is one demo page that imports `@ui-starter/ui`.

## Commands

```bash
bun install
bun run dev         # http://localhost:5173
bun run storybook   # http://localhost:6006
bun run typecheck
```

## Where to go

| Job | Open first | Change |
| --- | --- | --- |
| Mock up a screen | `Patterns/Overview`, then the closest pattern story | A story beside that pattern |
| Pick a workflow | `Patterns/Overview`, "How to choose a workflow" | Copy that pattern. Keep `Shell` as the frame |
| Build a table | `Modules/Table` Overview | The smallest table story that matches the task |
| Add a control that does not exist | The matching story under Components, Layout, or Modules | `packages/ui/src/components`, export it from `packages/ui/src/index.ts`, and add a story next to the file. A module that already has a `stories/` folder gets the story there |
| Change color, type, or space | Foundations stories | Semantic tokens in `packages/ui/src/styles/theme.css`. Leave the primitive ramps fixed |
| Show the mock in the running app | `apps/web/src/App.tsx` | That file. This app has no router |

`Patterns/Overview` chooses the workflow: navigating domains, create a record, modifying a record, wizard, onboarding, task management, or the visualization page.

## How to change

Import reusable components from `@ui-starter/ui`. The public list is `packages/ui/src/index.ts`. A pattern story shows a composition, so check that list before importing the pattern as a component. Run `bun run typecheck`, then review the screen or story at desktop (1440px) and mobile (375px).

## Catalog

Storybook groups the catalog into Foundations, Layout, Components, Modules, and Patterns. Navigation controls sit with Components. Foundations covers color, type, spacing, sizing, radius, shadow, and motion. Layout holds frames, overlays, rules, and arrangement. Modules are the shell, forms, detail, and table. Patterns are the workflows that use those modules. The toolbar switches light and dark. The viewport can be Mobile (375px) or Desktop (1440px).
