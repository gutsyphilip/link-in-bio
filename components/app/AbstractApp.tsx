"use client";

import React, { PropsWithChildren } from 'react';
import { darkTheme, globalStyles } from '@/styles';

import { ThemeProvider } from "next-themes";

export const SITE_THEMES = { light: "light", dark: darkTheme.className }

const AbstractApp = (p: PropsWithChildren) => {
    globalStyles();

    const [showChild, setShowChild] = React.useState(false);
    React.useEffect(() => {
        setShowChild(true);
    }, []);

    return <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={SITE_THEMES}>
        {showChild && p.children}
    </ThemeProvider>
}

export default AbstractApp