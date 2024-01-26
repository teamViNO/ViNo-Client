import { RecoilRoot } from 'recoil';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Styles
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

// Pages
import CategoryPage from '@/pages/CategoryPage';
import FindEmailPage from '@/pages/FindEmailPage';
import FindPasswordPage from '@/pages/FindPasswordPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import SearchPage from '@/pages/SearchPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import SummaryPage from '@/pages/SummaryPage';

// Layouts
import Layout from './components/layout/Layout';

// Components
import { ToastList } from './components/common';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <BrowserRouter>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/find-email" element={<FindEmailPage />} />
            <Route path="/find-password" element={<FindPasswordPage />} />

            <Route element={<Layout />}>
              <Route path="/category/recent" element={<CategoryPage />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/summary" element={<SummaryPage />} />
              <Route path="/" element={<HomePage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>

        <ToastList />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
