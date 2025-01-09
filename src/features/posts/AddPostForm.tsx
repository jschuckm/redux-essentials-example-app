import { useAppDispatch } from '@/app/hooks'
import React from 'react'
import { Post, postAdded, postUpdated } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
  return (
    <section>
      <h2>Add a New Post</h2>
      <PostForm></PostForm>
    </section>
  )
}

export const PostForm = (props: {post?: Post}) => {
  let {title, content, id} = props?.post ? props?.post : {title: '', content: '', id: ''}
  const dispatch = useAppDispatch()
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    // Prevent server submission
    e.preventDefault()

    const { elements } = e.currentTarget
    const newTitle = elements.postTitle.value
    const newContent = elements.postContent.value

    console.log('Values: ', { title, content })
    if(id) {
      dispatch(postUpdated({title: newTitle, content: newContent, id: id}))
    } else {
      dispatch(postAdded(newTitle, newContent))
    }

    e.currentTarget.reset()
  }

  return (<form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue={title} required />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={content}
          required
        />
        <button>{id ? 'Edit' : 'Save'} Post</button>
      </form>)
}