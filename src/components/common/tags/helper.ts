import { colors } from '../../../theme';
export const tagColorMap: Record<string, { color: string; backgroundColor: string }> = {
  Urgent: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryYellow,
  },
  New: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryGreen,
  },
  Default: {
    color: colors.primaryGray,
    backgroundColor: colors.grayLightest,
  },
  High: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryRed,
  },
  Normal: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryGreen,
  },
  Low: {
    color: colors.primaryWhite,
    backgroundColor: colors.primaryYellow,
  },
};
