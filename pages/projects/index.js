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
        <Img src={image} layout="responsive" width={634} height={317} />
        <Fade triggerOnce delay={delay}>
          <Card.Body>
            <h4>{title}</h4>
            <p>{description}</p>
          </Card.Body>
        </Fade>
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
          title="Financial Tracker"
          description="A group financial tracker. Signup and enter your contribution towards a goal. Complete with pie and bar graphs as well as a detailed history."
          link="http://stat-sample.codadash.com.s3-website-us-east-1.amazonaws.com"
          tags={['ChartJS', 'React', 'MongoDB', 'Serverless', 'Docker', 'next-auth']}
          delay={0}
          year={2021}
          id={10}
          image="/assets/coverImg/stat-charts.jpg"
        />
        <ProjectBox
          title="Web Scraper"
          description="A full serverless framework application, uses lambdas to scrape store to a mongodb and then allows for public use through an API Gateway"
          link="http://p09-scraper-consumer.s3-website-us-east-1.amazonaws.com"
          tags={['API', 'Severless', 'Lambda', 'JSDom']}
          delay={0}
          year={2021}
          id={9}
          image="/assets/coverImg/lambda-scrape.jpg"
        />
        <ProjectBox
          title="Type Racing Game"
          description="Type Racing Game built in React with Web Sockets. Features multiplayer lobby with live chat, typing stats, and a race to the finish."
          link="/projects/redirect?id=8"
          tags={['MongoDB', 'Web Sockets', 'React', 'Express']}
          delay={0}
          year={2021}
          id={8}
          image="/assets/coverImg/race-cover.png"
        />
        <ProjectBox
          title="Confluence ElasticSearch Engine"
          description="Machine Learning search engine for internal company systems. Using ElasticSearch with current data loaded from several systems. This search engine will provide links and short descriptions similar to Google."
          link="http://p05-ml-search-main.s3-website-us-east-1.amazonaws.com"
          tags={['React', 'Express', 'ElasticSearch', 'Python']}
          delay={0}
          year={2020}
          id={5}
          image="/assets/coverImg/react-search.jpg"
        />
        <ProjectBox
          title="Serverless E-Commerce Website"
          description="Fullstack Nextjs e-commerce project. My most complete project yet. Connects to Stripe and a MongoDB database to allow for products to be added to cart and checked out. Many different tools involved here. Check it out!"
          link="https://p07-market.vercel.app"
          tags={['Nextjs', 'Stripe', 'MongoDB', 'PayPal', 'Websockets']}
          delay={0}
          year={2020}
          id={7}
          image="/assets/coverImg/market.jpg"
        />
        <ProjectBox
          title="Social Media (Senior Project)"
          description="Senior fullstack project to assist with spotting human trafficking and reporting it. This is a social media site to make posts with images and make comments about missing people."
          link="http://p06-social-sample.s3-website-us-east-1.amazonaws.com"
          tags={['React', 'Express', 'MongoDB', 'AWS S3']}
          delay={0}
          year={2020}
          id={6}
          image="/assets/coverImg/traffick.jpg"
        />
        <ProjectBox
          title="Dashboard"
          description="React Dashboard. Sample of a currently used production page created in my intern postion at Ellucian"
          link="http://p04-dashboard-main.s3-website-us-east-1.amazonaws.com"
          tags={['React']}
          delay={0}
          year={2020}
          id={4}
          image="/assets/coverImg/ecrm-dashboard.jpg"
        />
        <ProjectBox
          title="Twitter Clone"
          description="Django Social Media site using Bootstrap, Misaka and django-braces. Hosted using Heroku"
          link="/projects/redirect?id=django-2"
          tags={['Django']}
          delay={0}
          year={2019}
          id='django-01'
          image="/assets/coverImg/dj-social-cover.jpg"
        />
        <ProjectBox
          title="Flickr Tag API Search"
          description="Simple photo search application. Made for a web dev. application. Uses Flickr API to get 20 photos from the tags searched"
          link="http://p03-flickr-main.s3-website-us-east-1.amazonaws.com"
          tags={['API', 'React']}
          delay={0}
          year={2021}
          id={3}
          image="/assets/coverImg/flickr.png"
        />
        <ProjectBox
          title="Blog Tutorial"
          description="Django Blog using Bootstrap. Hosted using Heroku"
          link="/projects/redirect?id=django-1"
          tags={['Django']}
          delay={0}
          year={2019}
          id='django-01'
          image="/assets/coverImg/dj-blog-cover.jpg"
        />
        <ProjectBox
          title="Web Dev 101 School Project"
          description="Mock Tech Support website with JavaScript form validation project"
          link="http://p02-techsupport-main.s3-website-us-east-1.amazonaws.com"
          tags={['JavaScript']}
          delay={0}
          year={2018}
          id={2}
          image="/assets/coverImg/tech-cover.jpg"
        />
        <ProjectBox
          title="My First Site"
          description="Mock Photography website"
          link="http://p01-photography-main.s3-website-us-east-1.amazonaws.com"
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
