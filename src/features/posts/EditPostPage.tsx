import { useParams } from "react-router-dom";
import { SinglePost } from "./SinglePostPage";
import { PostForm } from "./AddPostForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectPostById } from "./postsSlice";


export function EditPostPage() {
    const {postId} = useParams()
    const post = useAppSelector((state) => selectPostById(state, postId!))
    return (
        <>
         <h1>Edit Post</h1>
         <SinglePost postId={postId}/>
         <PostForm post={post}/>
        </>
       
    )
}