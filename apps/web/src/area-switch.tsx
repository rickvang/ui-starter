import { useSyncExternalStore, type ReactNode } from "react";
import { resolveAreaPage } from "./area-pages";

function subscribe(onStoreChange: () => void) {
    window.addEventListener("popstate", onStoreChange);
    return () => window.removeEventListener("popstate", onStoreChange);
}

function pathname() {
    return window.location.pathname;
}

export function AreaSwitch({ home }: { home: ReactNode }) {
    const path = useSyncExternalStore(subscribe, pathname, () => "/");
    const resolved = resolveAreaPage(path);
    if (!resolved) {
        return home;
    }

    const Page = resolved.page;
    return <Page area={resolved.area} />;
}
