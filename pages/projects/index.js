import { Fade } from 'react-awesome-reveal'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { useRouter } from 'next/router'
import Img from 'next/image'
import { BoxArrowUpRight } from 'react-bootstrap-icons'

const ProjectBox = ({ description, link, delay, tags, year, image, id, title }) => {
  const router = useRouter()

  function handleClick(e, link) {
    if (document.elementFromPoint(e.clientX, e.clientY).id === 'open-in-tab') {
      window.open(link, '_blank').focus()
    } else {
      router.push(link)
    }
  }

  return (
    <Col md={6}>
      <style global jsx>{`
        #open-in-tab { color: #6c757d; }
        #open-in-tab:hover { color: #6f9dc5; }
        .project-card { cursor: pointer; }
        .project-card:hover, .project-card:active {
          background-color: #e2edf6;
        }
      `}</style>
      <Card className="project-card my-4 shadow rounded" id={id} onClick={e => handleClick(e, link)}>
        <div>
          <Img src={image} alt="project" width={634} height={317} style={{ width: '100%', height: 'auto' }} sizes="100vw" />
        </div>
        {/* <Fade triggerOnce delay={delay}> */}
          <Card.Body>
            <h4>{title}</h4>
            <p>{description}</p>
          </Card.Body>
        {/* </Fade> */}
        <Card.Footer>
          <small className="me-2 text-muted">{year}</small>
          {tags && tags.map(tag => (
            <Badge pill bg="secondary" key={tag} className="me-2">
              {tag}
            </Badge>
          ))}
          <p className="me-2 d-inline" id="open-in-tab">open in new tab <BoxArrowUpRight style={{margin: '0 0 .3rem .2rem'}} size={15}/></p>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default function Projects() {
  return (
    <div className="my-3">
      <h1 className="display-2 m-4">Projects 🔨</h1>
      <hr />
      <Row>
        <ProjectBox
          title="BayHacks"
          description="This was a website made to advertise and have embed RSVP signup for a Tampa Hack-a-thon called bayhacks 2023. It uses Threejs to render a 3D scene which can be moved through by scrolling"
          link="https://p15.codabool.com"
          tags={['Three.js', 'vite', 'theater', 'react']}
          delay={0}
          year={2023}
          id={15}
          image="/assets/coverImg/bayhacks.jpg"
        />
        <ProjectBox
          title="Slap"
          description="Play the fast paced Slap card game directly in your browser. This is a multiplayer game and can be played with up to 3 friends."
          link="https://p12.codabool.com"
          tags={['Three.js', 'nextjs', 'socket.io']}
          delay={0}
          year={2023}
          id={14}
          image="/assets/coverImg/slaps.jpg"
        />
        <ProjectBox
          title="Nikola Assistant"
          description="I attended TadHack 2022 in Tampa, Florida. We were tasked with using a speech to text API for a project. We built a drive with your voice game that can be very challenging."
          link="https://p11.codabool.com"
          tags={['Three.js', 'React', 'Speech-to-Text', 'Figma']}
          delay={0}
          year={2022}
          id={13}
          image="/assets/coverImg/nikola-assistant.jpg"
        />
        <ProjectBox
          title="Managing Obesity"
          description="My first Master's degree application! This web app aims to help users manage their obesity. This uses 3D models, and dynamic charts. So, its a real treat to look at."
          link="https://p10.codabool.com"
          tags={['Three.js', 'Next.js', 'authentication', 'prisma', 'PSQL', 'chart.js']}
          delay={0}
          year={2022}
          id={12}
          image="/assets/coverImg/obesity-cover.jpg"
        />
        <ProjectBox
          title="Three.js Spinner"
          description="Create a 1 in 4 chance of anything happening. This is a 3D model with editable text all within your browser. Give it a spin!"
          link="https://p13.codabool.com"
          tags={['Three.js', 'React']}
          delay={0}
          year={2021}
          id={11}
          image="/assets/coverImg/spinner.jpg"
        />
        <ProjectBox
          title="Financial Tracker"
          description="A group financial tracker. Signup and enter your contribution towards a goal. Complete with pie and bar graphs as well as a detailed history."
          link="https://p14.codabool.com"
          tags={['ChartJS', 'React', 'MongoDB', 'Serverless', 'Docker', 'next-auth']}
          delay={0}
          year={2021}
          id={10}
          image="/assets/coverImg/stat-charts.jpg"
        />
        <ProjectBox
          title="Web Scraper"
          description="A full serverless framework application, uses lambdas to scrape store to a mongodb and then allows for public use through an API Gateway"
          link="https://p9.codabool.com"
          tags={['API', 'Severless', 'Lambda', 'JSDom']}
          delay={0}
          year={2021}
          id={9}
          image="/assets/coverImg/lambda-scrape.jpg"
        />
        <ProjectBox
          title="Type Racing Game"
          description="Type Racing Game built in React with Web Sockets. Features multiplayer lobby with live chat, typing stats, and a race to the finish."
          link="https://p8.codabool.com"
          tags={['MongoDB', 'Web Sockets', 'React', 'Express']}
          delay={0}
          year={2021}
          id={8}
          image="/assets/coverImg/race-cover.png"
        />
        <ProjectBox
          title="Confluence ElasticSearch Engine"
          description="Machine Learning search engine for internal company systems. Using ElasticSearch with current data loaded from several systems. This search engine will provide links and short descriptions similar to Google."
          link="https://p5.codabool.com"
          tags={['React', 'Express', 'ElasticSearch', 'Python']}
          delay={0}
          year={2020}
          id={5}
          image="/assets/coverImg/react-search.jpg"
        />
        <ProjectBox
          title="Serverless E-Commerce Website"
          description="Fullstack Nextjs e-commerce project. My most complete project yet. Connects to Stripe and a MongoDB database to allow for products to be added to cart and checked out. Many different tools involved here. Check it out!"
          link="https://p7.codabool.com"
          tags={['Nextjs', 'Stripe', 'MongoDB', 'PayPal', 'Websockets']}
          delay={0}
          year={2020}
          id={7}
          image="/assets/coverImg/market.jpg"
        />
        <ProjectBox
          title="Social Media (Senior Project)"
          description="Senior fullstack project to assist with spotting human trafficking and reporting it. This is a social media site to make posts with images and make comments about missing people."
          link="https://p6.codabool.com"
          tags={['React', 'Express', 'MongoDB', 'AWS S3']}
          delay={0}
          year={2020}
          id={6}
          image="/assets/coverImg/traffick.jpg"
        />
        <ProjectBox
          title="Dashboard"
          description="React Dashboard. Sample of a currently used production page created in my intern postion at Ellucian"
          link="https://p4.codabool.com"
          tags={['React']}
          delay={0}
          year={2020}
          id={4}
          image="/assets/coverImg/ecrm-dashboard.jpg"
        />
        <ProjectBox
          title="Flickr Tag API Search"
          description="Simple photo search application. Made for a web dev. application. Uses Flickr API to get 20 photos from the tags searched"
          link="https://p3.codabool.com"
          tags={['API', 'React']}
          delay={0}
          year={2021}
          id={3}
          image="/assets/coverImg/flickr.png"
        />
        <ProjectBox
          title="Web Dev 101 School Project"
          description="Mock Tech Support website with JavaScript form validation project"
          link="https://p2.codabool.com"
          tags={['JavaScript']}
          delay={0}
          year={2018}
          id={2}
          image="/assets/coverImg/tech-cover.jpg"
        />
        <ProjectBox
          title="My First Site"
          description="Mock Photography website"
          link="https://p1.codabool.com"
          tags={['JavaScript']}
          delay={0}
          year={2015}
          image="/assets/coverImg/photo-cover.jpg"
          id={1}
        />
      </Row>
    </div>
  )
}
