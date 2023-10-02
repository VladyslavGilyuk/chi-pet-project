import { ActionContainer } from './styled';
import MajorInfoBox from '../../components/overview/majorInfoBox';
import UnresolvedInfoBox from '../../components/overview/unresolvedInfoBox';

const Overview = () => {
  return (
    <>
      <MajorInfoBox />
      <ActionContainer>
        <UnresolvedInfoBox />
        <UnresolvedInfoBox />
      </ActionContainer>
    </>
  );
};

export default Overview;
