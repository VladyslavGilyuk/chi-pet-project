import { ActionContainer } from './styled';
import InfoCards from '../../components/overview/infoCards';
import TasksInfoBox from '../../components/overview/tasksInfoBox';
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
