import Heading from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    heading: 'Small',
    description: 'Desc',
  },
};

export const Long: Story = {
  args: {
    heading: 'Some really long heading',
    description: 'Some really long description',
  },
};

export const HeadingOnly: Story = {
  args: {
    heading: 'Only heading',
  },
};
