"use client";

import BioHeader from '@/components/pages/BioHeader';
import LinksList from '@/components/pages/LinksList';
import { PageParams } from '@/types/pages';
import PageSocials from '@/components/pages/PageSocials';
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
            <PageSocials socials={p.pageData?.userProfile.socialLinks} />
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