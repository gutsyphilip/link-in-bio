import { Dribbble, Facebook, GitHub, Icon, Instagram, Linkedin, Twitter, Youtube } from 'react-feather'
import React, { ReactNode } from 'react'

import Link from 'next/link'
import { SocialLinksParams } from '@/types/pages'
import { styled } from '@/styles'

interface PageSocialsProps {
    socials: SocialLinksParams
}

const PLATFORM_TO_ICON_MAP: { [key: string]: Icon } = {
    facebook: Facebook,
    github: GitHub,
    twitter: Twitter,
    linkedin: Linkedin,
    dribbble: Dribbble,
    instagram: Instagram,
    youtube: Youtube,
}

const PageSocials = (p: PageSocialsProps) => {
    return (
        <StyledContainer>
            {Object.keys(p.socials).map((platform: keyof typeof PLATFORM_TO_ICON_MAP) => {
                console.log(platform)
                const Icon = PLATFORM_TO_ICON_MAP[platform] || null
                if (!Icon) return null
                return <Link href={p.socials[platform]} key={platform}>
                    <Icon />
                </Link>
            })}

        </StyledContainer>
    )
}

export default PageSocials


const StyledContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    margin: '$5 auto',
})