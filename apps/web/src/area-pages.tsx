import type { ComponentType } from "react";
import { areas, findArea, matchAreaPath, type Area } from "./areas";

export type AreaPage = ComponentType<{ area: Area }>;

/** Pages for registered areas. Empty until a page is requested. */
export const areaPages: Partial<Record<string, AreaPage>> = {};

export function areaPageKey(area: Pick<Area, "kind" | "id">): string {
    return `${area.kind}/${area.id}`;
}

export function resolveAreaPage(
    pathname: string,
    pages: Partial<Record<string, AreaPage>> = areaPages,
    list: readonly Area[] = areas,
): { area: Area; page: AreaPage } | null {
    const match = matchAreaPath(pathname);
    if (!match) {
        return null;
    }

    const area = findArea(match.kind, match.id, list);
    if (!area) {
        return null;
    }

    const page = pages[areaPageKey(area)];
    if (!page) {
        return null;
    }

    return { area, page };
}
