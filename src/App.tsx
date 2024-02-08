import { useRecoilValue } from 'recoil';
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
// import GuestPage from './pages/GuestPage';
import ProfilePage from '@/pages/ProfilePage';
import SearchPage from '@/pages/SearchPage';
import SearchResult from './pages/SearchResultPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import SignUpSuccessPage from '@/pages/SignUpSuccessPage';
import SummaryPage from '@/pages/SummaryPage';

// Layouts
import Layout from './components/layout/Layout';

// Components
import { ToastList } from './components/common';

// Store
import { userTokenState } from './stores/user';

const App = () => {
  const userToken = useRecoilValue(userTokenState);

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
            </>
          )}

          <Route element={<Layout />}>
            {userToken && (
              <>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search/result" element={<SearchResult />} />
                <Route path="/profile" element={<ProfilePage />} />
              </>
            )}

            <Route path="/category/recent" element={<CategoryPage />} />
            <Route path="/category/:top_folder" element={<CategoryPage />} />
            <Route
              path="/category/:top_folder/:sub_folder"
              element={<CategoryPage />}
            />
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
