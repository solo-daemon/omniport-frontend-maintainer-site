import React, { Component } from "react";
import { Card, Container, Image,Label} from "semantic-ui-react";
import styles from "../css/blog.css";
class Blogs extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const blogs = [
            {
              title: "Cat IMG.txt",
              subtitles: "hello knowledge seekers",
              image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
              author:"Rhea Parekh",
              authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
              date: "4 Jan",
              readingTime: "5 min",
              url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
            },
            {
                title: "Cat IMG.txt",
                subtitles: "hello knowledge seekers",
                image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
                author:"Rhea Parekh",
                authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
                date: "4 Jan",
                readingTime: "5 min",
                url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
              },
              {
                title: "Cat IMG.txt",
                subtitles: "hello knowledge seekers",
                image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
                author:"Rhea Parekh",
                authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
                date: "4 Jan",
                readingTime: "5 min",
                url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
              },
              {
                title: "Cat IMG.txt",
                subtitles: "hello knowledge seekers",
                image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
                author:"Rhea Parekh",
                authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
                date: "4 Jan",
                readingTime: "5 min",
                url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
              },
              {
                title: "Cat IMG.txt",
                subtitles: "hello knowledge seekers",
                image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
                author:"Rhea Parekh",
                authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
                date: "4 Jan",
                readingTime: "5 min",
                url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
              },
              {
                title: "Cat IMG.txt",
                subtitles: "hello knowledge seekers",
                image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
                author:"Rhea Parekh",
                authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
                date: "4 Jan",
                readingTime: "5 min",
                url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
              },
              {
                title: "Cat IMG.txt",
                subtitles: "hello knowledge seekers",
                image: "http://img.channeli.in/media/uploads/froala_editor/images/Comic.png",
                author:"Rhea Parekh",
                authorImage:"https://miro.medium.com/fit/c/240/240/1*w4Mo89AP0mI-yeNcTGIl4g.jpeg",
                date: "4 Jan",
                readingTime: "5 min",
                url: "https://medium.com/img-iit-roorkee/cat-img-txt-75eb7ef038ba"
              },
        ]
        return(
            <Container>
                <Card.Group itemsPerRow={2} stackable >
                    {blogs.map(info =>(
                        <Card raised href={info.url}>
                            <Image src={info.image} />
                            <Card.Content textAlign="left" >
                                <Card.Header>{info.title}</Card.Header>
                                <Card.Description>{info.subtitles}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <div styleName="styles.authorDetails">
                            <Label><Image  avatar spaced='right'  src={info.authorImage} />{info.author}</Label>
                            </div>
                             <div styleName="styles.blogDetails">
                             <Label >{info.date} . {info.readingTime} read</Label>
                             </div>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </Container>
        );
    
    }
}
export default Blogs