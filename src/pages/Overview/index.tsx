import { ActionContainer } from './styled';
import InfoCards from '../../components/overview/InfoCards';
import TasksInfoBox from '../../components/overview/tasksBox';
import UnresolvedInfoBox from '../../components/overview/unresolvedInfoBox';

const Overview = () => {
  return (
    <>
      <InfoCards />
      <ActionContainer>
        <UnresolvedInfoBox />
        <TasksInfoBox />
      </ActionContainer>
    </>
  );
};

export default Overview;
