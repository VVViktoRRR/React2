import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {Post, PostComments, PostDetail, User, UserDetail, UserPosts} from "./components";

function App() {
  return (
    <div>
        <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}>
                  <Route path={'user'} element={<User/>}/>
                  <Route path={':id'} element={<UserDetail/>}>
                      <Route path={'posts'} element={<UserPosts/>}/>
                  </Route>
               </Route>
              <Route path={'posts'} element={<PostsPage/>}>
                  <Route path={'post'} element={<Post/>}/>
                  <Route path={':id'} element={<PostDetail/>}>
                          <Route path={'comments'} element={<PostComments/>}/>
                   </Route>

              </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
