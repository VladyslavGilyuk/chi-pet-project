import InfoCards from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'InfoCards',
  component: InfoCards,
} satisfies Meta<typeof InfoCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
