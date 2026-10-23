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

| Job | Open first | Put the work |
| --- | --- | --- |
| Mock up a screen | `Patterns/Overview`, then the closest pattern story | A story beside that pattern |
| Pick a workflow | `Patterns/Overview`, "How to choose a workflow" | Copy that pattern. Keep `Shell` as the frame |
| Add a control that does not exist | The matching story under Components, Layout, or Modules | `packages/ui/src/components`, export it from `packages/ui/src/index.ts`, add a story next to the file |
| Change color, type, or space | Foundations stories | Semantic tokens in `packages/ui/src/styles/theme.css`. Leave the primitive ramps fixed |
| Show the mock in the running app | `apps/web/src/App.tsx` | That file. This app has no router |

`Patterns/Overview` chooses the workflow: navigating domains, create a record, modifying a record, wizard, onboarding, task management, or the visualization page.

## How to add

**A screen.** Copy the closest story under `packages/ui/src/components/patterns`. Compose `Shell` and the modules that story already uses.

**A control.** Add it under `packages/ui/src/components` in `base`, `layout`, `navigation`, or `modules`. Export it from `packages/ui/src/index.ts`. Add a story beside the file.

**Color, type, or space.** Edit semantic tokens in `packages/ui/src/styles/theme.css`. Primitive ramps stay fixed. Foundations stories are the token reference.

## Catalog

Storybook groups the catalog into Foundations, Layout, Components, Modules, and Patterns. Navigation controls sit with Components. Foundations covers color, type, spacing, sizing, radius, shadow, and motion. Layout holds frames, overlays, rules, and arrangement. Modules are the shell, forms, detail, and table. Patterns are the workflows that use those modules. The toolbar switches light and dark. The viewport can be Mobile (375px) or Desktop (1440px).
