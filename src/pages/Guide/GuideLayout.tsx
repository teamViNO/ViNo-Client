import { Link, Outlet, useLocation } from 'react-router-dom';

import { Container, Visual } from '@/styles/GuidePage';

const GuideLayout = () => {
  const { pathname } = useLocation();

  const linkList = [
    { id: 'HOME', name: '홈 화면', to: '/guide/home' },
    { id: 'SUMMARY', name: '영상 요약', to: '/guide/summary' },
    { id: 'CATEGORY', name: '카테고리 정리', to: '/guide/category' },
    { id: 'SEARCH', name: '검색', to: '/guide/search' },
  ];

  return (
    <Container>
      <Visual className="dark-section">
        <div className="box">
          <img
            className="guide-logo"
            src="/assets/guide-logo.png"
            alt="guide-logo"
          />

          <h1 className="title">VINO 가이드</h1>
        </div>

        <ul className="link-list">
          {linkList.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className={pathname === link.to ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Visual>

      <Outlet />
    </Container>
  );
};

export default GuideLayout;
