import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Styles
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

// Pages
import CategoryPage from '@/pages/CategoryPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import SearchPage from '@/pages/SearchPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import SummaryPage from '@/pages/SummaryPage';
import Layout from './components/layout/Layout';

import SearchResult from './pages/SearchResultPage';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search-result/:query" element={<SearchResult />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/summary" element={<SummaryPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
