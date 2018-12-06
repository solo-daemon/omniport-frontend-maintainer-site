import React,{Component} from "react";
import {Card, Container, Segment, Menu, Icon} from "semantic-ui-react";
import ProjectDetail from "./project-detail";
import axios from "axios"

class Projects extends Component {
    constructor(props) {
      super(props);
      this.state = {
          projects: [],
          current: 1,
          total: 0,
      }
    }

    componentDidMount() {
        this.paginating(1);
    }

    paginating = (a) => {
        const URL = "/api/maintainer_site/projects/?page="+a
        this.setState({current: a});
        axios.get(URL)
        .then(res => {
            this.setState({
                projects: res.data.results,
                total: Math.ceil(res.data.count/12)
            }, () => {
         })
        })
    }
    leftClick = () => {
        if(this.state.current>1)
         { 
             let change = this.state.current
             this.setState({current:change-1},()=>{this.paginating(this.state.current)})
         }
    }
    rightClick = () => {
        if(this.state.current<this.state.total)
         { 
             let change = this.state.current
             this.setState({current:change+1},()=>{this.paginating(this.state.current)})
         }
    }
    render(){
       let menu = [];
        for (let index = 1; index <= this.state.total; index++) {
            menu[index] = (<Menu.Item  active={this.state.current==index} onClick={() => {this.paginating(index)}}>{index}</Menu.Item>)
         }
        
       return(
          <Container>
                <Card.Group itemsPerRow={3} stackable doubling>
                    {this.state.projects.map(info => (
                        <ProjectDetail info={info} />
                    ))}
                </Card.Group>
                <Segment padded basic>
                    <Menu  pagination>
                         <Menu.Item onClick={() => {this.leftClick()} }  icon>
                         <Icon name='chevron left' />
                         </Menu.Item>
                         {menu}
                         <Menu.Item onClick={() => {this.rightClick()} } icon>
                         <Icon  name='chevron right' />
                         </Menu.Item>
                    </Menu>
                </Segment>
          </Container>
        );
    }
}
export default Projects;