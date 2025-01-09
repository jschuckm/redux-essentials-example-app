import { Link, useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import { selectPostById } from './postsSlice'

export const SinglePostPage = () => {
  const { postId } = useParams()

  return (
    <>
    <Link to={`/posts/${postId}/edit`}>Edit</Link>
    <SinglePost postId={postId}></SinglePost>
    </>
  )
}

export const SinglePost = (props: {postId?: string}) => {
  const {postId} = props
  const post = useAppSelector(state =>
    selectPostById(state, postId!)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}