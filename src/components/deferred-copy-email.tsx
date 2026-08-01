"use client";

import dynamic from "next/dynamic";

export const DeferredCopyEmail = dynamic(
    () => import("@/components/CopyMail").then((m) => m.CopyEmail),
    { ssr: false }
);
