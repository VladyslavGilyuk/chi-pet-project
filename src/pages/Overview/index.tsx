import { ActionContainer } from './styled';
import Chart from '../../components/overview/chart';
import InfoCards from '../../components/overview/infoCards';
import TasksInfoBox from '../../components/overview/tasksInfoBox';
import UnresolvedTicketsBox from '../../components/overview/unresolvedTicketsBox';

const Overview = () => {
  return (
    <>
      <InfoCards />
      <Chart />
      <ActionContainer>
        <UnresolvedTicketsBox />
        <TasksInfoBox />
      </ActionContainer>
    </>
  );
};

export default Overview;
