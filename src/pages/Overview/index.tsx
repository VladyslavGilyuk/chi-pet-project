import { ActionContainer } from './styled';
import MajorInfoBox from '../../components/overview/majorInfoBox';
import TasksInfoBox from '../../components/overview/tasksBox';
import UnresolvedInfoBox from '../../components/overview/unresolvedInfoBox';

const Overview = () => {
  return (
    <>
      <MajorInfoBox />
      <ActionContainer>
        <UnresolvedInfoBox />
        <TasksInfoBox />
      </ActionContainer>
    </>
  );
};

export default Overview;
