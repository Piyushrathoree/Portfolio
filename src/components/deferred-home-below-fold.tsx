"use client";

import dynamic from "next/dynamic";

const DeferredHomeBelowFold = dynamic(
    () => import("@/components/home-below-fold"),
    { ssr: false }
);

export default DeferredHomeBelowFold;
