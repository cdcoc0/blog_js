import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import SettingsPage from './pages/SettingsPage';
import SettingBlogPage from './pages/SettingBlogPage';

const App = () => {
    return (
        <>
            <Route component={PostListPage} path={['/@:username', '/']} exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={WritePage} path="/write" />
            <Route component={PostPage} path="/@:username/:postId" />
            <Route component={SettingsPage} path={["/@:username/settings", "/settings"]} exact />
            <Route component={SettingBlogPage} path={["/@:username/settings/blog", "/settings/blog"]} />
        </>
    );
};

export default App;