"use client";

import { LinkParams } from '@/types/pages';
import React from 'react'
import { motion } from 'framer-motion'
import { styled } from '@/styles'

interface LinksListItemProps {
    link: LinkParams
    key: string
}

const LinksListItem = (p: LinksListItemProps) => {
    const { link, ...rest } = p;

    return (
        <StyledLink {...rest}>
            {p.link.title}
        </StyledLink>
    )
}

export default LinksListItem

const StyledLink = styled(motion.div, {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$3',
    borderRadius: '$pill',
    border: '1px solid $grey300',
    maxHeight: 50,
})