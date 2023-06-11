"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { styled } from '@/styles';
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <StyledSelect value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </StyledSelect>
    )
}

export default ThemeSwitcher

const StyledSelect = styled(motion.select, {
    backgroundColor: '$bgLightColor',
    position: 'fixed',
    top: '$3',
    right: '$3',
    padding: '$2',
    borderRadius: '$2',
    cursor: 'pointer',
    width: 100,
})