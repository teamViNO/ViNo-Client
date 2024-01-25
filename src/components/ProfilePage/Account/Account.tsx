import NaverIconImage from '@/assets/naver-icon.png';

import { Box } from '@/styles/ProfilePage';

const Account = () => {
  const isSocialAccount = true;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className="title">계정</h2>

        <button className="submit disabled">변경하기</button>
      </div>

      <Box>
        <div
          className="account-group"
          style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
        >
          <div className="avatar"></div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              flex: '1 1 auto',
            }}
          >
            <span className="group-title">닉네임</span>

            <div className="input-box">
              <div style={{ display: 'flex', flex: '1 1 auto' }}>
                <input type="text" value="여울" />
              </div>

              <span className="input-guide">3/7 (공백포함)</span>
            </div>
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">이름</span>

          <div className="input-box disabled">
            <div style={{ display: 'flex', flex: '1 1 auto' }}>서예진</div>

            <span className="input-guide">3/7 (공백포함)</span>
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">성별</span>

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="option">미표기</button>
            <button className="option">남자</button>
            <button className="option selected">여자</button>
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">생년월일</span>

          <div style={{ display: 'flex', gap: 12 }}>
            <div className="input-box disabled">2001</div>
            <div className="input-box disabled">07</div>
            <div className="input-box disabled">01</div>
          </div>
        </div>

        <div className="account-group">
          <span className="group-title">전화번호</span>

          <div className="input-box disabled">010901716171</div>
        </div>

        {isSocialAccount && (
          <div className="account-group">
            <span className="group-title">계정</span>

            <div
              className="input-box disabled"
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <img src={NaverIconImage} width={40} />

              <span>yejin2174@naver.com</span>
            </div>
          </div>
        )}
      </Box>

      {!isSocialAccount && (
        <Box>
          <div className="account-group">
            <span className="group-title">계정</span>

            <div className="input-box disabled">yejin2174@naver.com</div>
          </div>

          <div className="account-group">
            <span className="group-title">비밀번호</span>

            <div className="input-box" style={{ padding: '5px 4px 5px 16px' }}>
              <div style={{ display: 'flex', flex: '1 1 auto' }}>
                <input type="password" value="123456" />
              </div>

              <button className="submit disabled">변경하기</button>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Account;
