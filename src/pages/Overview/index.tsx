import { ActionContainer } from './styled';
import ChartBox from '../../components/charts/chartBox';
import InfoCards from '../../components/cards/infoCards';
import TasksInfoBox from '../../components/cards/tasksInfoBox';
import UnresolvedTicketsBox from '../../components/cards/unresolvedTicketsBox';

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
