import { ActionContainer } from './styled';
import ChartBox from '../../components/overview/chartBox';
import InfoCards from '../../components/overview/infoCards';
import TasksInfoBox from '../../components/overview/tasksInfoBox';
import UnresolvedTicketsBox from '../../components/overview/unresolvedTicketsBox';

const Overview = () => {
  return (
    <>
      <InfoCards />
      <ChartBox />
      <ActionContainer>
        <UnresolvedTicketsBox />
        <TasksInfoBox />
      </ActionContainer>
    </>
  );
};

export default Overview;
