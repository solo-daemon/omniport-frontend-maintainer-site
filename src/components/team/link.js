import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'

import style from '../../css/team/add-member-details.css'

class Link extends React.Component {
  constructor(props) {
    super(props)
  }

  handleDelete = e => {
    this.props.handleUpdateDelete(e)
  }

  render() {
    const pop = this.props.name
    const ICON_OPTIONS = this.props.linkListOptions
    var iconText = ''
    if (!this.props.data.url) {
      let data = this.props.data
      data = data.toLowerCase()
      iconText = data.replace(/\s/g, '')
    }
    return (
      <Segment styleName="style.headingBox">
        <div styleName="style.socialBox">
          {ICON_OPTIONS ? (
            <Icon name={ICON_OPTIONS[this.props.data.site]} />
          ) : (
            <img
              height="20"
              width="20"
              src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${iconText}.svg`}
            />
          )}
          {this.props.data.url ? (
            <p styleName="style.link">{this.props.data.url}</p>
          ) : (
            <p styleName="style.link">{this.props.data}</p>
          )}
        </div>
        <Icon
          name="delete"
          id={this.props.id}
          pop={this.props.name}
          onClick={this.handleDelete}
        />
      </Segment>
    )
  }
}
export default Link
