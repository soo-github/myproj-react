import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import TopNav from './components/TopNav';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import PageSignup from 'pages/accounts/PageSignup';
import PageBlog from 'pages/PageBlog';

import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';
import PageNewsArticleDetail from 'pages/news/PagNewsArticleDetail';

import ReviewList from 'pages/reviews/ReviewList';
import ReviewForm from 'pages/reviews/ReviewForm';

import PageMovieIndex from 'pages/movie/PageMovieIndex';
import PageMoviePostDetail from 'pages/movie/PageMoviePostDetail';
import PageMoviePostForm from 'pages/movie/PageMoviePostForm';

function App() {
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/pagelogin/" element={<PageLogin />} />
          <Route path="/accounts/pageprofile/" element={<PageProfile />} />
          <Route path="/accounts/pagesignup/" element={<PageSignup />} />
          <Route path="/blog/" element={<PageBlog />} />

          {/* ----------------------------------------------------------------- */}

          {/* 뉴스 페이지 */}
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />

          {/* ----------------------------------------------------------------- */}

          {/* 리뷰 페이지 */}
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />

          {/* ----------------------------------------------------------------- */}

          {/* 영화 페이지 */}
          <Route path="/movie/" element={<PageMovieIndex />} />
          <Route path="/movie/new/" element={<PageMoviePostForm />} />
          <Route path="/movie/:postId/" element={<PageMoviePostDetail />} />
          <Route path="/movie/:postId/edit/" element={<PageMoviePostForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
