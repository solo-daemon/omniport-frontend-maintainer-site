import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import styles from '../../css/projects/project-card.css'

const ProjectDetail = ({ info }) => {
  return (
    <Card raised>
      <a href={`/maintainer_site/projects/${info.slug}`}>
        <Image styleName="styles.item-card-img" src={info.image} />
      </a>
      <Card.Content href={`/maintainer_site/projects/${info.slug}`}>
        <Card.Header styleName="styles.text-break">{info.title}</Card.Header>
        <Card.Description styleName="styles.text-break">
          {info.shortDescription}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
export default ProjectDetail
