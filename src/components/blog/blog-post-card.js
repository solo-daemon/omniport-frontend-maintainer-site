import React from 'react'
import moment from 'moment'
import { Card, Image } from 'semantic-ui-react'

import { MEDIUM_URL, BLOG_IMAGE_URL, AUTHOR_IMAGE_URL } from '../../consts'

import styles from '../../css/blog/blog.css'

const imageStyle = id => {
  return {
    width: '100%',
    height: '200px',
    backgroundImage: 'url(' + BLOG_IMAGE_URL + id + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
}

const BlogDetail = ({ info, pub }) => {
  return (
    <Card raised target="_blank">
      <a href={`${MEDIUM_URL}${pub}/${info.slug}-${info.id}`}>
        <div style={imageStyle(info.imageId)} />
      </a>

      <Card.Content
        textAlign="left"
        href={`${MEDIUM_URL}${pub}/${info.slug}-${info.id}`}
      >
        <Card.Header>{info.title}</Card.Header>
        <Card.Description>{info.subtitle}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={`${MEDIUM_URL}@${info.username}`}>
          <div styleName="styles.authorDetails" styleName="styles.link">
            <div>
              <Image
                avatar
                spaced="right"
                src={AUTHOR_IMAGE_URL + info.authorImageId}
              />
              {info.name}
            </div>
          </div>
        </a>
        <div styleName="styles.blogDetails">
          <div>{`${moment(info.createdAt).format("MMM Do, 'YY")} · ${Math.ceil(
            info.readingTime
          )} min`}</div>
        </div>
      </Card.Content>
    </Card>
  )
}

export default BlogDetail
