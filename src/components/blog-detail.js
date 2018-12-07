import React from "react"
import moment from 'moment'
import { Card, Image, Grid } from "semantic-ui-react"
import styles from "../css/blog.css"

const MEDIUM_URL = 'https://medium.com/'
const MEDIUM_PUBLICATION = 'img-iit-roorkee'
const BLOG_IMAGE_URL = 'https://cdn-images-1.medium.com/max/600/'
const AUTHOR_IMAGE_URL = 'https://cdn-images-1.medium.com/fit/c/50/50/'

const BlogDetail = ({ info }) => (
    <Card raised href={`${MEDIUM_URL}${MEDIUM_PUBLICATION}/${info.slug}-${info.id}`} target='_blank'>
        <Image fluid src={BLOG_IMAGE_URL+info.imageId} />
        <Card.Content textAlign="left" >
            <Card.Header>{info.title}</Card.Header>
            <Card.Description>{info.subtitle}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div styleName="styles.authorDetails">
                <div><Image avatar spaced='right' src={AUTHOR_IMAGE_URL+info.authorImageId} />{info.name}</div>
            </div>
            <div styleName="styles.blogDetails">
                <div>{`${moment(info.createdAt).format('MMM Do, \'YY')} · ${parseInt(info.readingTime)} min`}</div>
            </div>
        </Card.Content>
    </Card>
)

export default BlogDetail