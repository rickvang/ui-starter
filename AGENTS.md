# ui-starter

`packages/ui` is the catalog. `apps/web` is the demo page. Mockups belong in Storybook. Change the demo page when that page itself should show the mock.

## Route

| Job | Open first | Put the work |
| --- | --- | --- |
| Mock up a screen | `Patterns/Overview`, then the closest pattern story | A story beside that pattern |
| Pick a workflow | `Patterns/Overview`, "How to choose a workflow" | Copy that pattern. Keep `Shell` as the frame |
| Add a control that does not exist | The matching story under Components, Layout, or Modules | `packages/ui/src/components`, export from `packages/ui/src/index.ts`, story beside the file |
| Change color, type, or space | Foundations stories | Semantic tokens in `packages/ui/src/styles/theme.css`. Primitive ramps stay fixed |
| Show the mock in the running app | `apps/web/src/App.tsx` | That file. This app has no router |

Workflows in `Patterns/Overview`: navigating domains, create a record, modifying a record, wizard, onboarding, task management, visualization page.

## Commands

```bash
bun install
bun run dev         # http://localhost:5173
bun run storybook   # http://localhost:6006
bun run typecheck
```

## Catalog folders

- `foundations` — token stories
- `base`, `layout`, `navigation`, `modules` — product components
- `patterns` — workflows
- `templates` — catalog prose (`DocPage`), not product controls

Storybook groups: Foundations, Layout, Components, Modules, and Patterns. Navigation controls sit with Components. The toolbar switches light and dark. The viewport can be Mobile (375px) or Desktop (1440px).
