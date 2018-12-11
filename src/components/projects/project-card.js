import React from "react"
import { Card, Image } from "semantic-ui-react"

const ProjectDetail = ({ info }) => {
    return (
        <Card raised href={info.slug}>
            <Image src={info.image} />
            <Card.Content>
                <Card.Header>{info.title}</Card.Header>
                <Card.Description>{info.shortDescription}</Card.Description>
            </Card.Content>
        </Card>
    )
}
export default ProjectDetail
