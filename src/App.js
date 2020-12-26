import 'bootstrap/dist/css/bootstrap.min.css';

import PostForm from "./components/PostForm";
import LocalPosts from "./components/LocalPosts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
    return (
        <div className="container pt-3">
            <div className="row ">
                <div className=" col">
                    <PostForm />
                </div>
            </div>
            <div className="row ">
                <div className=" col">
                    <h2>Local posts</h2>
                    <LocalPosts />
                </div>
                <div className=" col">
                    <h2>Fetched posts</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    );
}

export default App;
