import React from "react"

import { Segment } from "semantic-ui-react"

import Link from "./link"

class LinkList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data
        const name = this.props.name
        const handleUpdateDelete = this.props.handleUpdateDelete
        const linkListOptions = this.props.linkListOptions
            ? this.props.linkListOptions
            : null
        const children = Array.from(data).map(function(child, index) {
            return (
                <Link
                    id={index}
                    data={child}
                    name={name}
                    handleUpdateDelete={handleUpdateDelete}
                    linkListOptions={linkListOptions}
                />
            )
        })
        return <Segment.Group>{children}</Segment.Group>
    }
}
export default LinkList
