import React from 'react'
import moment from 'moment'
import { Card } from 'semantic-ui-react'

import styles from '../../css/blog/blog.css'

const imageStyle = thumbnail => {
  return {
    width: '100%',
    height: '200px',
    backgroundImage: `url('${thumbnail}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
}

const BlogDetail = ({ info }) => {
  return (
    <Card target="_blank" href={info.link}>
      <div style={imageStyle(info.thumbnail)} />
      <Card.Content>
        <Card.Header>{info.title}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div styleName="styles.authorDetails">
          <div>{info.author}</div>
        </div>
        <div styleName="styles.blogDetails">
          <div>{`${moment(info.pubDate).format("MMM Do, 'YY")}`}</div>
        </div>
      </Card.Content>
    </Card>
  )
}

export default BlogDetail
