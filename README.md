# ui-starter

A two-part React starter in one folder.

- `packages/ui` holds tokens, `Button`, `TextField`, and Storybook.
- `apps/web` is a Vite app that imports `@ui-starter/ui`.

## Scripts

```bash
bun install
bun run dev         # http://localhost:5173
bun run storybook   # http://localhost:6006
bun run typecheck
```

Change colors in `packages/ui/src/styles/theme.css`. Primitive ramps stay fixed. Semantic tokens (`canvas`, `ink`, `accent`, `danger`, and the rest) swap under the `dark` class. Add a component under `packages/ui/src/components/base`, `layout`, `navigation`, or `patterns`, export it from `packages/ui/src/index.ts`, and add a story next to it.

Storybook groups the catalog into Foundations, Layout, Components, Modules, and Patterns. Navigation controls sit with Components. Layout frames, overlays, and rules are skeletons. Modules are the shell, forms, detail, and table. Patterns holds navigating domains and the workflows that use those modules. Foundations covers color primitives, semantic color, type, spacing, sizing, radius, shadow, and motion. Motion durations are feedback (150ms), enter (200ms), leave (100ms), and travel (300ms). Type, color, sizing, radius, and shadow examples compare dense product UI, web pages, and graphic assets. Spacing and sizing share one scale, `spacing-01` (2px) through `spacing-13` (160px), with `spacing-05.5` (20px) between 16px and 24px. Utilities are `gap-spacing-05`, `p-spacing-05`, `w-spacing-05`, and `h-spacing-05`. Foundations/Spacing also documents usage and examples for stack, actions, fields, forms, and pages. Patterns stays the group for composed components. The toolbar switches light and dark, and the viewport can be Mobile (375px) or Desktop (1440px).
