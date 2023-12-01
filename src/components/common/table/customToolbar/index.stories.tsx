/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomToolbar from './index';
import { EFormType } from '..';
import { StyledDataGrid } from '../styled';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CustomToolbar',
  component: CustomToolbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route
            path='/*'
            element={
              <StyledDataGrid
                columns={[] as any}
                rows={[] as any}
                slots={{
                  toolbar: () => <Story />,
                }}
              ></StyledDataGrid>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CustomToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apiUrl: 'http://localhost:3000/tickets?_page=1&_limit=8',
    selectedPriorities: [],
    setSelectedPriorities: () => {},
    sortingOptions: [
      { label: 'Sort Option 1', value: 'sortOption1' },
      { label: 'Sort Option 2', value: 'sortOption2' },
    ],
    formType: EFormType.Tickets,
    disabledFilter: false,
    priorityOptions: ['High', 'Medium', 'Low'],
  },
};
export const ManyOptions: Story = {
  args: {
    apiUrl: 'http://localhost:3000/tickets?_page=1&_limit=8',
    selectedPriorities: [],
    setSelectedPriorities: () => {},
    sortingOptions: [
      { label: 'Sort Option 1', value: 'sortOption1' },
      { label: 'Sort Option 2', value: 'sortOption2' },
      { label: 'Sort Option 3', value: 'sortOption3' },
      { label: 'Sort Option 4', value: 'sortOption4' },
      { label: 'Sort Option 5', value: 'sortOption5' },
      { label: 'Sort Option 6', value: 'sortOption6' },
      { label: 'Sort Option 7', value: 'sortOption7' },
      { label: 'Sort Option 8', value: 'sortOption8' },
      { label: 'Sort Option 9', value: 'sortOption9' },
      { label: 'Sort Option 10', value: 'sortOption10' },
      { label: 'Sort Option 11', value: 'sortOption11' },
      { label: 'Sort Option 12', value: 'sortOption12' },
    ],
    formType: EFormType.Tickets,
    disabledFilter: false,
    priorityOptions: ['High', 'Medium', 'Low', 'Default', 'New', 'Normal'],
  },
};
export const WithoutFilter: Story = {
  args: {
    apiUrl: 'http://localhost:3000/tickets?_page=1&_limit=8',
    selectedPriorities: [],
    setSelectedPriorities: () => {},
    sortingOptions: [
      { label: 'Sort Option 1', value: 'sortOption1' },
      { label: 'Sort Option 2', value: 'sortOption2' },
    ],
    formType: EFormType.Tickets,
    disabledFilter: true,
    priorityOptions: ['High', 'Medium', 'Low'],
  },
};
