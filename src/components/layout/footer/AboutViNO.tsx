import * as FooterStyle from '@/styles/layout/Footer.style';

const AboutViNO = () => {
  const aboutViNOs: [string, string, string][] = [
    ['TEAM Vi.NO', '고객센터 | 01041949853', '메일 | pm.ooodd@gmail.com'],
    ['이용약관', '개인정보처리방침', '문의하기'],
  ];

  return (
    <>
      {aboutViNOs.map((aboutViNO: [string, string, string], idx: number) => (
        <FooterStyle.AboutViNOWrap key={`about-ViNO-wrap-${idx}`}>
          {aboutViNO.map((about: string) => (
            <FooterStyle.AboutViNO key={about}>{about}</FooterStyle.AboutViNO>
          ))}
        </FooterStyle.AboutViNOWrap>
      ))}
    </>
  );
};

export default AboutViNO;
