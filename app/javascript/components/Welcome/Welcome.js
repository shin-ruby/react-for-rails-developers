import React, { Component } from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'
import axios from 'axios'

import PostCard from './Article/PostCard'
import PostForm from './Article/PostForm'


const Section = styled.section`

`

class Welcome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [

      ],
      formTitle: '',
      formContent: '',
    }
  }

  componentDidMount () {
    axios.get('/articles')
    .then(data => {
      let res = []
      data.data.data.map((data) =>{
        res.push({id: data.id, title: data.title, content: data.content})

        this.setState({articles: res})
      })

    })
    .catch(data => {
      // debugger
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { formTitle: title, formContent: content } = this.state
    const newArticles = this.state.articles.concat({ title, content })

    axios.post('/create_article', {
      article: {title,content}
    }).then(res => console.log(res))
      .catch(err => console.error(err));

    this.setState({
      articles: newArticles,
      formTitle: '',
      formContent: '',
    })
  }

  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value,
    })
  }

  handleContentInput(e) {
    this.setState({
      formContent: e.target.value,
    })
  }

  render() {
    return (
      <div className="index" style={welcomeStyles}>
        <Section className="container">
          {this.state.articles.map((article, index) => (
            <PostCard key={index} title={article.title} content={article.content} />
          ))}
          <PostForm
            formTitle={this.state.formTitle}
            formContent={this.state.formContent}
            handleSubmit={e => this.handleSubmit(e)}
            handleTitleInput={e => this.handleTitleInput(e)}
            handleContentInput={e => this.handleContentInput(e)}
          />
        </Section>
      </div>

    )
  }
}

Welcome.propTypes = {
  title: PropTypes.string
}

const welcomeStyles = {
  backgroundColor: '#f4f4f4'
}


export default Welcome
