"use client";

import Image from 'next/image'
import React from 'react'
import { UserProfileParams } from '@/types/pages';
import { motion } from 'framer-motion';
import { styled } from '@/styles'

interface BioHeaderProps {
    userProfile: UserProfileParams
}

const BioHeader = (p: BioHeaderProps) => {
    return (
        <StyledHeader>
            <ProfileImage layoutId={`${p.userProfile.username}_avatar_container`} src={p.userProfile.avatar} alt={p.userProfile.name} />
            <h5>{`@${p.userProfile.username}`}</h5>
            <h1>{p.userProfile?.name}</h1>
            <p>{p.userProfile.bio}</p>
        </StyledHeader>
    )
}

export default BioHeader

const StyledHeader = styled('header', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '$3',
    marginBottom: '$8',
})

const ProfileImage = styled(motion.img, {
    borderRadius: '$round',
    objectFit: 'cover',
    backgroundColor: '$bgLightColor',
    width: '150px',
    height: '150px',
})