"use client";

import PageItem from '@/components/home/PageItem';
import React from 'react'
import { styled } from '@/styles';

interface PagesGridProps {
    pages: any
}

const PagesGrid = (p: PagesGridProps) => {
    return (
        <StyledContainer>
            {p.pages.map((page) => (
                <PageItem key={page.userId} username={page.userProfile.username} userProfile={page.userProfile} />
            ))}
        </StyledContainer >
    )
}

export default PagesGrid

const StyledContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '$5',
    width: '100%',
    padding: '$3',
    maxWidth: 900,
    margin: '$8 auto',
})