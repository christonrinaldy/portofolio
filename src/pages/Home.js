import React, { useEffect, useState } from 'react'
import {Container,Image, CardDeck, Card, Navbar, Nav} from 'react-bootstrap'
import profile from '../assets/profile1.jpg'
import backend_icon from '../assets/backend_icon.png'
import frontend_icon from '../assets/frontend_icon.png'
import others_icon from '../assets/databases_icon.png'
import arcade from '../assets/arcade.png'
import github_icon from '../assets/github_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'
import email_icon from '../assets/email_icon.png'
import ecommerce from '../assets/e-commerce.png'
import cinema from '../assets/cinema.jpg'
import about_background from '../assets/about-background.jpg'

export default function Home() {
    const [mySkills, setSkillPage] = useState(null)
    const [aboutMe, setAboutMe] = useState(null)
    const [myProjects, setProjectPage] = useState(null)

    useEffect(() => {
        setSkillPage(document.getElementById("skillPage"))
    },[])
    useEffect(() => {
        setAboutMe(document.getElementById("about"))
    },[])
    useEffect(() => {
        setProjectPage(document.getElementById("projects"))
    },[])
    return (
        <>
            <Navbar sticky="top" style = {{ backgroundColor: "burlywood"}}>
                <Navbar.Brand href="/">CHRISTON RINALDY</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="" onClick={() => aboutMe.scrollIntoView()}>About</Nav.Link>
                <Nav.Link href="" onClick={() => mySkills.scrollIntoView() }>MySkills</Nav.Link>
                <Nav.Link href="" onClick={() => myProjects.scrollIntoView() }>MyProjects</Nav.Link>
                </Nav>
            </Navbar>
            <section id="about" style={{display: "flex",flexDirection:"column",justifyContent:"space-around", background: `url(${about_background})`, color: "lightyellow", fontWeight: "bold"}}>
                <div style={{justifyContent:"center"}}>
                    <div style={{display:"flex",justifyContent:"center", flexDirection:"column",alignContent:"center", textAlign:"center"}}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Image src={profile} roundedCircle={true} width="200px" />
                        </div>
                        <h1>Christon Rinaldy Juniver B</h1>
                        <h3>Full Stack Developer</h3>
                    </div>
                </div>
                <br></br>
                <div className="Introduction" style={{display: "flex", justifyContent:"space-evenly"}}>
                    <div className="AboutMe" style={{width:"420px", textAlign:"justify"}}>
                        <h4>AboutMe</h4>
                        <p>
                            My name is Christon Rinaldy Juniver. You can call me Christon/Ton. I love programming, football and playing games. I was graduated from Institut Teknologi Bandung on October, 2018 from Geodesy and Geomatics Engineering. Worked for 1 year as a Junior Geodetic Surveyor on dredging industry in UAE, decided to join Full Stack Immersive Program on Hacktiv8 Indonesia coding bootcamp. Here I am, starting my journey as a Full Stack Developer :)
                        </p>
                    </div>
                    <div className="contact">
                        <h4>Contact</h4>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <div>
                                <img src={github_icon} width="50px" height="50px" onMouseOver={(e)=> console.log(e.target.style.transform = "scale(1.5)")} onMouseLeave={(e)=> console.log(e.target.style.transform = "scale(1)")} onClick={() => window.open('https://github.com/christonrinaldy')}></img>
                            </div>
                            <div>
                                <img src={linkedin_icon} width="50px" height="50px" onMouseOver={(e)=> console.log(e.target.style.transform = "scale(1.5)")} onMouseLeave={(e)=> console.log(e.target.style.transform = "scale(1)")} onClick={() => window.open('https://www.linkedin.com/in/christonrjb/')}></img>
                            </div>
                            <div>
                                <img src={email_icon} width="50px" height="50px" onMouseOver={(e)=> console.log(e.target.style.transform = "scale(1.5)")} onMouseLeave={(e)=> console.log(e.target.style.transform = "scale(1)")} onClick={() => window.open('christonrinaldy.geodesy@gmail.com')}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skillPage">
                <div id = "skills"style={{display:"flex", flexDirection:"column"}}>
                    <div style={{textAlign:"center"}}>
                        <h1>My Skills</h1>
                    </div>
                    <div>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={backend_icon} width="auto"/>
                            <Card.Body>
                            <Card.Title>Back End Programming</Card.Title>
                            <Card.Text style={{display:"flex"}}>
                                <ul>
                                    <li>ExpressJs</li>
                                    <li>sequelize</li>
                                    <li>redis</li>

                                </ul>
                                <ul>
                                    <li>SocketIo</li>
                                    <li>graphql</li>
                                    <li>NodeJs</li>

                                </ul>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={frontend_icon} />
                            <Card.Body>
                            <Card.Title>Front End Programming</Card.Title>
                            <Card.Text style={{display:"flex"}}>
                            <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>ReactJs</li>
                                    <li>react-redux</li>

                                </ul>
                                <ul>
                                    <li>VueJs</li>
                                    <li>react-native</li>
                                    <li>jQuery</li>

                                </ul>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={others_icon} height="288px"/>
                            <Card.Body>
                            <Card.Title>Others</Card.Title>
                            <Card.Text style={{display:"flex"}}>
                                <ul title="databases:">
                                    <li>NoSQL: MongoDb</li>
                                    <li>SQL: postgreSQL</li>
                                </ul>
                                <ul>
                                    <li>Phaser3</li>
                                    <li>github</li>
                                    <li>firebase</li>
                                    <li>MATLAB</li>
                                    <li>ArcGIS</li>
                                </ul>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"></small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                    </div>
                </div>
            </section>
            <section id="projects" style={{display:"flex", flexDirection:"column"}}>
                <div style={{textAlign:"center"}}>
                    <h1>My Projects</h1>
                </div>
                <div>
                <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={arcade} width="auto"/>
                            <Card.Body>
                            <Card.Title>ArcadeJs</Card.Title>
                            <Card.Text >
                            A web that contains two games: Snake and Whack A Mole.
                            <br></br>
                            <a href="http://arcadejs.s3-website-ap-southeast-1.amazonaws.com">Click here to play</a>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={ecommerce} />
                            <Card.Body>
                            <Card.Title>E-commerce CMS</Card.Title>
                            <Card.Text>
                                E-commerce-cms is a content management system for e-commerce products that will be presented on web for customer.
                                Technology: ReactJs, Redux, Express, PostgreSQL, Bootstrap, Sequelize.
                                <a href="https://github.com/christonrinaldy/e-commerce-react">go to source code</a>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={cinema} height="288px"/>
                            <Card.Body>
                            <Card.Title>EntertainMe</Card.Title>
                            <Card.Text>
                            A simple platform to save user’s favorite movies and TVSeries.
                            Technology: Apollo Client, GraphQL, Apollo Server, MongoDb, React, Express, Redis
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"></small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
            </section>
        </>
    )
}