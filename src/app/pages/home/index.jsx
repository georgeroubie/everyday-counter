import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import _Title from '../../components/typography/Title';
import _Button from '../../components/ui/Button';
import { AppContext } from '../../state/Context';
import CounterList from './CounterList';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
  gap: ${({ theme: { spacing } }) => spacing.large};
`;

const Title = styled(_Title)`
  margin-bottom: 0;
`;

const Button = styled(_Button)`
  width: auto;
  flex-shrink: 0;
`;

const Home = () => {
  const { state } = useContext(AppContext);
  const { list } = state;
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {Boolean(list.length) && (
        <TitleWrapper>
          <Title>Counters</Title>
          <Button size="large" onClick={() => navigate('/add-new-counter')}>
            Add new
          </Button>
        </TitleWrapper>
      )}
      <CounterList />
    </PageWrapper>
  );
};

export default Home;
