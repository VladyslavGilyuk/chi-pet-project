import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import TasksInfoBox from './index';
import { store } from '../../../store';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TasksInfoBox',
  component: TasksInfoBox,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Box style={{ width: '600px' }}>
          <Story />
        </Box>
      </Provider>
    ),
  ],
} satisfies Meta<typeof TasksInfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
