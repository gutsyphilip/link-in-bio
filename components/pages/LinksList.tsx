import { LinkParams } from '@/types/pages'
import LinksListItem from '@/components/pages/LinksListItem'
import React from 'react'
import { styled } from '@/styles'

interface LinksListProps {
    links: LinkParams[]
}

const LinksList = (p: LinksListProps) => {
    return (
        <StyledContainer>
            {p.links.map((link) => {
                return <LinksListItem key={link.title} link={link} />
            })}
        </StyledContainer>
    )
}

export default LinksList


const StyledContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',

})