import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";
import ResponsiveDrawer from './ResponsiveDrawer';
const baseURL = " https://jsonplaceholder.typicode.com/posts";
function Posts() {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPostList(response.data);
        });
    }, [])
    return (
        <div className="contentWrap">
            <ResponsiveDrawer />
            <div className="listItems">
                <PostList list={postList} />
            </div>
        </div>
    );
}
export default Posts;