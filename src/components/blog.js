import React, { Component } from "react"
import axios from 'axios'
import { Card, Container, Segment, Icon} from "semantic-ui-react"
import BlogDetail from './blog-detail'

const MEDIUM_URL = 'https://medium.com/'
const MEDIUM_PUBLICATION = 'img-iit-roorkee'

class Blogs extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
        }
    }

    componentDidMount() {
        const URL = '/api/maintainer_site/blogs'
        axios.get(URL)
        .then(res => {
            this.setState({
                blogs: res.data
            }, () => {
            })
        })
    }

    render() {
        return(
            <Container>
                <Card.Group itemsPerRow={3} stackable doubling>
                    {this.state.blogs.map(info =>(
                        <BlogDetail info={info} />
                    ))}
                </Card.Group>
                <Segment basic padded>
                    <Icon name="medium" size="big" link={true} onClick={()=> window.open(MEDIUM_URL+MEDIUM_PUBLICATION, "_blank")}/>
                </Segment>
            </Container>
        );
    
    }
}
export default Blogs