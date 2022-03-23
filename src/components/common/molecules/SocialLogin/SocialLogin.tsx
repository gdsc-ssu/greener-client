import AppleLogo from '@/assets/icons/AppleLogo';
import GoogleLogo from '@/assets/icons/GoogleLogo';
import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { CustomEnum } from '@/constants/types/typeUtils';
import * as styles from './SocialLogin.style';

export const SOCIAL_TYPE = {
  google: 'google',
  apple: 'apple',
} as const;
export type SocialType = CustomEnum<typeof SOCIAL_TYPE>;

const SOCIALS = {
  google: {
    description: 'Continue with Google',
    icon: GoogleLogo,
    backgroundColor: COLORS.grayscale.white,
    color: COLORS.grayscale.black,
  },
  apple: {
    description: 'Continue with Apple',
    icon: AppleLogo,
    backgroundColor: COLORS.grayscale.black,
    color: COLORS.grayscale.white,
  },
} as const;

interface SocialLoginProps {
  socialType: SocialType;
  onPress?: () => void;
}

export default function SocialLogin({ socialType, onPress }: SocialLoginProps) {
  const Icon = SOCIALS[socialType].icon;

  return (
    <styles.Container
      backgroundColor={SOCIALS[socialType].backgroundColor}
      onPress={onPress}
    >
      <Icon width={18} height={18} color={SOCIALS[socialType].color} />
      <styles.Description
        name={TEXT_STYLE_NAME.body2B}
        color={SOCIALS[socialType].color}
      >
        {SOCIALS[socialType].description}
      </styles.Description>
    </styles.Container>
  );
}
