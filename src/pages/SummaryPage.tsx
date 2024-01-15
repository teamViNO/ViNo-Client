import { SummaryDetailBox } from '@/components/SummaryPage';
import { SummaryScriptBox } from '@/components/SummaryPage';

import { Container } from '@/styles/SummaryPage';

const SummaryPage = () => {
  return (
    <Container>
      <SummaryDetailBox />

      <SummaryScriptBox />
    </Container>
  );
};

export default SummaryPage;
