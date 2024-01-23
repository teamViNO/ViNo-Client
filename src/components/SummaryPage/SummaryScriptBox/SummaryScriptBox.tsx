import { useState } from 'react';

import PlayIcon from '@/assets/icons/play.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import TransformationIcon from '@/assets/icons/transformation.svg?react';

import { ScriptBox } from '@/styles/SummaryPage';

import Indicator from './Indicator';
import ResizeThumb from './ResizeThumb';

const SummaryScriptBox = () => {
  const scriptList = [
    {
      id: 1,
      title: '생성형 AI 검색과 광고',
      start_time: '00:44',
      end_time: '01:56',
      content: `
      올해 IT업계의 가장 큰 화제는 단연코 생성형 AI라고 할 수 있겠습니다. 2022년 11월, OpenAI가 출시한 ChatGPT는 멀게만 느껴졌던 AI 기술을 우리의 실생활에 밀접한 서비스로 바꾸었죠. 그리고 이제는 디지털 광고 영역에서도 본격적으로 활용되고 있어요.<br /><br />

      나스미디어의 보고서에선 고도화되는 AI 기술이 소비자의 디지털 미디어 이용 행태를 변화시킬 것이라고 전망했습니다. 사용자가 정보를 검색할 때 일부 단계를 생성형 AI가 대신해 주기 때문인데요. 예를 들어, 무선 헤드폰을 구매할 때 기존에는 무선헤드폰, 블루투스 헤드폰 등의 키워드로 검색해서 블로거나 유튜버가 추천해 주는 헤드폰 정보를 발견하고, 발견한 제품의 상세 정보를 직접 비교했어요. 이제는 고도화된 생성형 AI가 적절한 여러 상품을 발견하고 비교, 요약까지 일목요연하게 대신해 주자 정보의 소비 여정이 짧아지게 되는 것이죠.<br /><br />
      
      이에 따라 국내외 빅테크 기업들이 너도나도 생성형 AI를 검색에 도입해 이용자에게 새로운 경험을 제공하고 있습니다. 그리고 자연스럽게 생성형 AI 검색에 다양한 광고도 도입될 것으로 전망됩니다. 이미 주요 기업에서는 AI 검색 전용 광고를 테스트하고 있는데요. MS와 Google, 네이버 등이 <mark>베타 테스트</mark>를 진행하고 있죠.
      `,
    },
    {
      id: 2,
      title: '비즈니스 핵심 전략, 숏폼',
      start_time: '00:44',
      end_time: '01:56',
      content: `
      올해에 이어 내년에도 숏폼은 중요한 트렌드 키워드였습니다. 유튜브 쇼츠나 메타의 릴스, 틱톡 등 주요 숏폼 플랫폼들은 크리에이터가 콘텐츠를 쉽게 제작할 수 있고 돈도 벌 수 있는 방안을 마련하고 있는데요. 그만큼 숏폼 콘텐츠가 굉장한 성장률을 보이고 있기 때문이죠. 지난 2분기 메타의 릴스 하루 시청수는 2천억 건 이상으로 집계돼 전년 대비 42.8% 증가했고요. 연간 매출 전망치도 100억 달러에 이를 것으로 보여요. <br /> <br />

      플랫폼들은 숏폼의 영향력에 자사 비즈니스를 연결하려는 시도를 내년에도 이어서 지속할 것으로 보입니다. 숏폼 콘텐츠 소비로 끝나는 것이 아니라 다른 서비스와 연계하는 것이죠.
      `,
    },
    {
      id: 3,
      title: '맞춤형 광고 못하는 쿠키리스 시대',
      start_time: '00:44',
      end_time: '01:56',
      content: `
      올해 IT업계의 가장 큰 화제는 단연코 생성형 AI라고 할 수 있겠습니다. 2022년 11월, OpenAI가 출시한 ChatGPT는 멀게만 느껴졌던 AI 기술을 우리의 실생활에 밀접한 서비스로 바꾸었죠. 그리고 이제는 디지털 광고 영역에서도 본격적으로 활용되고 있어요.<br /><br />

      나스미디어의 보고서에선 고도화되는 AI 기술이 소비자의 디지털 미디어 이용 행태를 변화시킬 것이라고 전망했습니다. 사용자가 정보를 검색할 때 일부 단계를 생성형 AI가 대신해 주기 때문인데요. 예를 들어, 무선 헤드폰을 구매할 때 기존에는 무선헤드폰, 블루투스 헤드폰 등의 키워드로 검색해서 블로거나 유튜버가 추천해 주는 헤드폰 정보를 발견하고, 발견한 제품의 상세 정보를 직접 비교했어요. 이제는 고도화된 생성형 AI가 적절한 여러 상품을 발견하고 비교, 요약까지 일목요연하게 대신해 주자 정보의 소비 여정이 짧아지게 되는 것이죠.<br /><br />
      
      이에 따라 국내외 빅테크 기업들이 너도나도 생성형 AI를 검색에 도입해 이용자에게 새로운 경험을 제공하고 있습니다. 그리고 자연스럽게 생성형 AI 검색에 다양한 광고도 도입될 것으로 전망됩니다. 이미 주요 기업에서는 AI 검색 전용 광고를 테스트하고 있는데요. MS와 Google, 네이버 등이 <mark>베타 테스트</mark>를 진행하고 있죠.
      `,
    },
  ];

  const [width, setWidth] = useState(865);
  const [focusId, setFocusId] = useState(1);

  return (
    <ScriptBox style={{ width }}>
      <div className="tools">
        <Indicator list={scriptList} focusId={focusId} onChange={setFocusId} />

        <div style={{ display: 'flex', gap: 8 }}>
          <span className="icon-button">
            <SearchIcon width={18} height={18} />
          </span>

          <span className="icon-button">
            <TransformationIcon width={18} height={18} />
          </span>
        </div>
      </div>

      <div style={{ height: 'calc(100% - 78px)', overflowY: 'auto' }}>
        <div className="script-container">
          {scriptList.map((script) => (
            <div key={script.id}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="play-button">
                    <PlayIcon width={36} height={36} />
                  </span>

                  <span className="script-title">{script.title}</span>
                </div>

                <span className="script-badge">
                  {script.start_time}-{script.end_time}
                </span>
              </div>

              <div
                className="script-content"
                dangerouslySetInnerHTML={{ __html: script.content }}
              />
            </div>
          ))}
        </div>
      </div>

      <ResizeThumb width={width} onChange={setWidth} />
    </ScriptBox>
  );
};

export default SummaryScriptBox;
