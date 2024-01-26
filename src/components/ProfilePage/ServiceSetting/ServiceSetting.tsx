import DarkIcon from '@/assets/icons/dark.svg?react';
import LightIcon from '@/assets/icons/light.svg?react';

import { Box } from '@/styles/ProfilePage';

const ServiceSetting = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <h2 className="title">서비스 설정</h2>

      <Box>
        <div className="setting-group">
          <div className="group-title">테마</div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button className="theme selected">
              <LightIcon width={24} height={24} />
              라이트
            </button>

            <button className="theme">
              <DarkIcon width={24} height={24} />
              다크
            </button>
          </div>
        </div>

        <div className="setting-group">
          <div className="group-title">관심분야</div>
        </div>
      </Box>
    </div>
  );
};

export default ServiceSetting;
