import { Box } from '@mui/material';
import UnresolvedTicketsBox from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UnresolvedTicketsBox',
  component: UnresolvedTicketsBox,
  decorators: [
    (Story) => (
      <Box style={{ width: '600px' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof UnresolvedTicketsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
