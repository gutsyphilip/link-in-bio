import LinkInBioPage from '@/components/pages/LinkInBioPage'
import React from 'react'
import { getPageDataByUsername } from '@/services/pages'
import { notFound } from 'next/navigation'

interface UserPagesProps {
    params: {
        subdomain: string
    }
}

const UserPages = async (p: UserPagesProps) => {
    const { subdomain } = p.params
    const pageData = await getPageDataByUsername(subdomain)

    if (!pageData) notFound()

    return <main>
        <LinkInBioPage pageData={pageData} />
    </main>
}

export default UserPages