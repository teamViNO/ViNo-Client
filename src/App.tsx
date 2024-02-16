import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

// Styles
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

// Pages
import { GuideLayout, GuideHomePage, GuidePage } from '@/pages/Guide';
import CategoryPage from '@/pages/CategoryPage';
import FindEmailPage from '@/pages/FindEmailPage';
import FindPasswordPage from '@/pages/FindPasswordPage';
import HomePage from '@/pages/HomePage';
//import GuestPage from '@/pages/GuestPage';
import ProfilePage from '@/pages/ProfilePage';
import SearchPage from '@/pages/SearchPage';
import SearchResult from './pages/SearchResultPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import SignUpSuccessPage from '@/pages/SignUpSuccessPage';
import SocialAccountPage from '@/pages/SocialAccountPage';
import SummaryPage from '@/pages/SummaryPage';

// Layouts
import Layout from '@/components/layout/Layout';

// Components
import { ToastList } from '@/components/common';

// Hooks
import useUpdateCategories from '@/hooks/useUpdateCategories';

// Store
import { userTokenState } from '@/stores/user';

const App = () => {
  const userToken = useRecoilValue(userTokenState);
  const { updateCategories } = useUpdateCategories();

  useEffect(() => {
    userToken && updateCategories();
  }, [updateCategories, userToken]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          {!userToken && (
            <>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-up/success" element={<SignUpSuccessPage />} />
              <Route path="/find-email" element={<FindEmailPage />} />
              <Route path="/find-password" element={<FindPasswordPage />} />
              <Route path="/social-account" element={<SocialAccountPage />} />
            </>
          )}

          <Route element={<Layout />}>
            {userToken && (
              <>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search/result" element={<SearchResult />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/category/recent" element={<CategoryPage />} />
                <Route
                  path="/category/:top_folder"
                  element={<CategoryPage />}
                />
                <Route
                  path="/category/:top_folder/:sub_folder"
                  element={<CategoryPage />}
                />
              </>
            )}

            <Route path="/guide" element={<GuideLayout />}>
              <Route path="/guide/home" element={<GuideHomePage />} />
              <Route path="/guide" element={<GuidePage />} />
            </Route>

            <Route path="/summary/:videoId" element={<SummaryPage />} />
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      <ToastList />
    </ThemeProvider>
  );
};

export default App;
