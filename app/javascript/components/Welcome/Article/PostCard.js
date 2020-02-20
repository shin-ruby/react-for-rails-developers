import React, { Component } from 'react'
import styled from 'styled-components'


const PostCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="post-title">{props.title}</div>
      </div>
      <div className="card-body">
        <div className="post-content">{props.content}</div>
      </div>
    </div>
  )
}

export default PostCard
