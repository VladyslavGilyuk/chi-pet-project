import Tag from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'any',
  },
};
export const Yellow: Story = {
  args: {
    text: 'Urgent',
  },
};

export const Green: Story = {
  args: {
    text: 'New',
  },
};
export const Red: Story = {
  args: {
    text: 'High',
  },
};

export const Gray: Story = {
  args: {
    text: 'Default',
  },
};
