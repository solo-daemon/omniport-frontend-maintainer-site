import React from "react"
import axios from "axios"
import { Segment } from "semantic-ui-react"

import Link from "./link"
import style from "../../css/team/add-member-details.css"

class LinkList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.data
        const handleUpdateDelete = this.props.handleUpdateDelete
        const children = Array.from(data).map(function(child, index) {
            return (
                <Link
                    id={index}
                    data={child}
                    handleUpdateDelete={handleUpdateDelete}
                />
            )
        })
        return <Segment.Group>{children}</Segment.Group>
    }
}
export default LinkList
