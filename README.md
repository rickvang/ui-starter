# ui-starter

A two-part React starter in one folder.

- `packages/ui` holds design tokens, reusable controls, layout components, composed modules, and Storybook examples.
- `apps/web` is a Vite app that imports `@ui-starter/ui`.

## Building with this starter

### Find what exists

- [Public exports](packages/ui/src/index.ts) list reusable components and types.
- In Storybook, browse Foundations → Layout → Components → Modules → Patterns.
- Read the relevant component's `.stories.tsx` examples beside its source. Larger modules may have a `stories/` folder with an Overview.

### Choose and reuse

- Start with the relevant module or pattern's usage guidance.
- Import reusable components from `@ui-starter/ui`.
- Patterns demonstrate compositions; check the public exports before assuming a pattern is an importable component.
- For tables, start with [Modules → Table → Overview](packages/ui/src/components/modules/table/stories/overview.stories.tsx), then choose the smallest example matching the task.

### Put changes in the right place

- Prototype pages and feature-specific behavior belong in `apps/web/src`.
- Reusable controls and modules belong in `packages/ui/src/components`.
- Shared visual tokens live in `packages/ui/src/styles/theme.css`.
- Use existing semantic tokens and spacing utilities; consult Foundations for their intended use.

### Check the result

- Run `bun run typecheck`.
- Review the affected screen or story at desktop and mobile sizes.

## Scripts

```bash
bun install
bun run dev         # http://localhost:5173
bun run storybook   # http://localhost:6006
bun run typecheck
```

Change colors in `packages/ui/src/styles/theme.css`. Primitive ramps stay fixed. Semantic tokens (`canvas`, `ink`, `accent`, `danger`, and the rest) swap under the `dark` class. Add a component under `packages/ui/src/components/base`, `layout`, `navigation`, or `patterns`, export it from `packages/ui/src/index.ts`, and add a story next to it.

Storybook groups the catalog into Foundations, Layout, Components, Modules, and Patterns. Navigation controls sit with Components. Layout frames, overlays, and rules are skeletons. Modules are the shell, forms, detail, and table. Patterns holds navigating domains and the workflows that use those modules. Foundations covers color primitives, semantic color, type, spacing, sizing, radius, shadow, and motion. Motion durations are feedback (150ms), enter (200ms), leave (100ms), and travel (300ms). Type, color, sizing, radius, and shadow examples compare dense product UI, web pages, and graphic assets. Spacing and sizing share one scale, `spacing-01` (2px) through `spacing-13` (160px), with `spacing-05.5` (20px) between 16px and 24px. Utilities are `gap-spacing-05`, `p-spacing-05`, `w-spacing-05`, and `h-spacing-05`. Foundations/Spacing also documents usage and examples for stack, actions, fields, forms, and pages. Patterns stays the group for composed components. The toolbar switches light and dark, and the viewport can be Mobile (375px) or Desktop (1440px).
