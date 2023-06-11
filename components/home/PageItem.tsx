import Image from 'next/image';
import Link from 'next/link';
import { UserProfileParams } from '@/types/pages';
import { motion } from 'framer-motion';
import { styled } from '@/styles';

interface PageItemProps {
    username: string;
    userProfile: UserProfileParams
}

const PageItem: React.FC<PageItemProps> = ({ username, userProfile }) => {
    const subdomain = username.toLowerCase();

    return (
        <StyledLink href={`/pages/${subdomain}`}>
            <StyledAvatar layoutId={`${username}_avatar_container`} src={userProfile.avatar} alt={userProfile.name} />
            <h3>{userProfile.name}</h3>
        </StyledLink>
    );
};


export default PageItem;

const StyledLink = styled(Link, {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const StyledAvatar = styled(motion.img, {
    borderRadius: '$round',
    objectFit: 'cover',
    backgroundColor: '$bgLightColor',
    width: '150px',
    height: '150px',
    marginBottom: '$3',
});