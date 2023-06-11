import { Metadata, ResolvingMetadata } from 'next'
import { getAllPages, getPageDataByUsername } from '@/services/pages'

import LinkInBioPage from '@/components/pages/LinkInBioPage'
import React from 'react'
import { notFound } from 'next/navigation'

interface UserPagesProps {
    params: {
        subdomain: string
    }
}

export async function generateStaticParams() {
    const pages = await getAllPages()

    return pages.map((page) => ({
        subdomain: page.userProfile.username.toLowerCase(),
    }))
}

export async function generateMetadata({ params }: UserPagesProps, parent?: ResolvingMetadata): Promise<Metadata> {
    const pageData = await getPageDataByUsername(params.subdomain)

    return {
        metadataBase: null,
        title: pageData?.userProfile.name,
        description: pageData?.userProfile.bio,
        openGraph: {
            title: pageData?.userProfile.name,
            description: pageData?.userProfile.bio,
            images: [pageData?.userProfile.avatar as string],
        },
        twitter: {
            title: pageData?.userProfile.name,
            description: pageData?.userProfile.bio,
            images: [pageData?.userProfile.avatar as string],
        }
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