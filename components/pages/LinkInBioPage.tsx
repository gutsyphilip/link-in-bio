"use client";

import BioHeader from '@/components/pages/BioHeader';
import LinksList from '@/components/pages/LinksList';
import { PageParams } from '@/types/pages';
import React from 'react'
import { styled } from '@/styles';

interface LinkInBioPageProps {
    pageData: PageParams
}

const LinkInBioPage = (p: LinkInBioPageProps) => {
    return (
        <StyledContainer>
            <BioHeader userProfile={p.pageData?.userProfile} />
            <LinksList links={p.pageData?.links} />
        </StyledContainer>
    )
}

export default LinkInBioPage

const StyledContainer = styled('div', {
    maxWidth: 550,
    margin: '$5 auto',
    padding: '$3',
    width: '100%'
})