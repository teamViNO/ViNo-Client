import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  return (
    <Container style={{ height: 'calc(100vh - 74px)' }}>
      <SummaryDetailBox />
      <SummaryScriptBox />
    </Container>
  );
};

export default SummaryPage;
