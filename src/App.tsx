import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Styles
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

// Pages
import CategoryPage from '@/pages/CategoryPage';
import ExamplePage from '@/pages/ExamplePage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import SearchPage from '@/pages/SearchPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <BrowserRouter>
          <Routes>
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/example" element={<ExamplePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
