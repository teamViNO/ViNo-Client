import * as FooterStyle from '@/styles/layout/Footer.style';

interface IAboutViNOProps {
  aboutViNOs: [string, string, string][];
}

const AboutViNO = ({ aboutViNOs }: IAboutViNOProps) => {
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
