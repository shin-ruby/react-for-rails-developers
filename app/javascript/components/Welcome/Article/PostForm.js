import React, { Component } from 'react'

const PostForm = (props) => {
  return (
    <div className="post-form">
      <h3>添加新的帖子</h3>
      <form onSubmit={props.handleSubmit}>
        <div>
          <h5>标题</h5>
          <div className="form-group">
            <input
              className="input-title"
              type="text"
              className="form-control"
              placeholder="点击输入标题"
              defaultValue={props.formTitle}
              onInput={props.handleTitleInput}
            />
          </div>
          <h5>正文</h5>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="点击输入正文"
              defaultValue={props.formContent}
              onInput={props.handleContentInput}
              rows="3"
            />
          </div>
          <input className="btn btn-primary" type="submit" value="提交" />
        </div>
      </form>
    </div>
  )
}

export default PostForm
