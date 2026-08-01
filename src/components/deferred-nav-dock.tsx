"use client";

import dynamic from "next/dynamic";

export const DeferredNavDock = dynamic(
    () => import("@/components/NavDock").then((m) => m.NavDock),
    { ssr: false }
);
