import Img from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


// Update this to make the top 4 priority loading
const NUM_OF_PROJECTS = 15

export default function page() {
  return (
    <div className="mx-auto my-3 md:container">
      <h1 className="m-4 text-6xl font-light">Projects 🔨</h1>
      <hr />
      <div className="flex flex-wrap justify-center mt-5">
        <ProjectBox
            title="BayHacks"
            description="This was a website made to advertise and have embed RSVP signup for a Tampa Hack-a-thon called bayhacks 2023. It uses Threejs to render a 3D scene which can be moved through by scrolling"
            link="https://p15.codabool.com"
            tags={['Three.js', 'vite', 'theater', 'react']}
            year={2023}
            id={15}
            image="/coverImg/bayhacks.jpg"
          />
          <ProjectBox
            title="Slap"
            description="Play the fast paced Slap card game directly in your browser. This is a multiplayer game and can be played with up to 3 friends."
            link="https://p12.codabool.com"
            tags={['Three.js', 'nextjs', 'socket.io']}
            year={2023}
            id={14}
            image="/coverImg/slaps.jpg"
          />
          <ProjectBox
            title="Nikola Assistant"
            description="I attended TadHack 2022 in Tampa, Florida. We were tasked with using a speech to text API for a project. We built a drive with your voice game that can be very challenging."
            link="https://p11.codabool.com"
            tags={['Three.js', 'React', 'Speech-to-Text', 'Figma']}
            year={2022}
            id={13}
            image="/coverImg/nikola-assistant.jpg"
          />
          <ProjectBox
            title="Managing Obesity"
            description="My first Master's degree application! This web app aims to help users manage their obesity. This uses 3D models, and dynamic charts. So, its a real treat to look at."
            link="https://p10.codabool.com"
            tags={['Three.js', 'Next.js', 'authentication', 'prisma', 'PSQL', 'chart.js']}
            year={2022}
            id={12}
            image="/coverImg/obesity-cover.jpg"
          />
          <ProjectBox
            title="Three.js Spinner"
            description="Create a 1 in 4 chance of anything happening. This is a 3D model with editable text all within your browser. Give it a spin!"
            link="https://p13.codabool.com"
            tags={['Three.js', 'React']}
            year={2021}
            id={11}
            image="/coverImg/spinner.jpg"
          />
          <ProjectBox
            title="Financial Tracker"
            description="A group financial tracker. Signup and enter your contribution towards a goal. Complete with pie and bar graphs as well as a detailed history."
            link="https://p14.codabool.com"
            tags={['ChartJS', 'React', 'MongoDB', 'Serverless', 'Docker', 'next-auth']}
            year={2021}
            id={10}
            image="/coverImg/stat-charts.jpg"
          />
          <ProjectBox
            title="Web Scraper"
            description="A full serverless framework application, uses lambdas to scrape store to a mongodb and then allows for public use through an API Gateway"
            link="https://p9.codabool.com"
            tags={['API', 'Severless', 'Lambda', 'JSDom']}
            year={2021}
            id={9}
            image="/coverImg/lambda-scrape.jpg"
          />
          <ProjectBox
            title="Type Racing Game"
            description="Type Racing Game built in React with Web Sockets. Features multiplayer lobby with live chat, typing stats, and a race to the finish."
            link="https://p8.codabool.com"
            tags={['MongoDB', 'Web Sockets', 'React', 'Express']}
            year={2021}
            id={8}
            image="/coverImg/race-cover.png"
          />
          <ProjectBox
            title="Confluence ElasticSearch Engine"
            description="Machine Learning search engine for internal company systems. Using ElasticSearch with current data loaded from several systems. This search engine will provide links and short descriptions similar to Google."
            link="https://p5.codabool.com"
            tags={['React', 'Express', 'ElasticSearch', 'Python']}
            year={2020}
            id={5}
            image="/coverImg/react-search.jpg"
          />
          <ProjectBox
            title="Serverless E-Commerce Website"
            description="Fullstack Nextjs e-commerce project. My most complete project yet. Connects to Stripe and a MongoDB database to allow for products to be added to cart and checked out. Many different tools involved here. Check it out!"
            link="https://p7.codabool.com"
            tags={['Nextjs', 'Stripe', 'MongoDB', 'PayPal', 'Websockets']}
            year={2020}
            id={7}
            image="/coverImg/market.jpg"
          />
          <ProjectBox
            title="Social Media (Senior Project)"
            description="Senior fullstack project to assist with spotting human trafficking and reporting it. This is a social media site to make posts with images and make comments about missing people."
            link="https://p6.codabool.com"
            tags={['React', 'Express', 'MongoDB', 'AWS S3']}
            year={2020}
            id={6}
            image="/coverImg/traffick.jpg"
          />
          <ProjectBox
            title="Dashboard"
            description="React Dashboard. Sample of a currently used production page created in my intern postion at Ellucian"
            link="https://p4.codabool.com"
            tags={['React']}
            year={2020}
            id={4}
            image="/coverImg/ecrm-dashboard.jpg"
          />
          <ProjectBox
            title="Flickr Tag API Search"
            description="Simple photo search application. Made for a web dev. application. Uses Flickr API to get 20 photos from the tags searched"
            link="https://p3.codabool.com"
            tags={['API', 'React']}
            year={2021}
            id={3}
            image="/coverImg/flickr.jpg"
          />
          <ProjectBox
            title="Web Dev 101 School Project"
            description="Mock Tech Support website with JavaScript form validation project"
            link="https://p2.codabool.com"
            tags={['JavaScript']}
            year={2018}
            id={2}
            image="/coverImg/tech-cover.jpg"
          />
          <ProjectBox
            title="My First Site"
            description="Mock Photography website"
            link="https://p1.codabool.com"
            tags={['JavaScript']}
            year={2015}
            image="/coverImg/photo-cover.jpg"
            id={1}
          />
        </div>
    </div>
  )
}


function ProjectBox({ description, link, tags, year, image, id, title}) {
  return (
    <Card className="w-full mb-4 md:m-4 lg:w-[47%]">
      <Link href={link} target="_blank" className="h-full">
        <CardHeader className="h-44">
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription>&emsp;{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* give priority loading to the top 4 */}
          {id < NUM_OF_PROJECTS - 3
            ? <Img src={image} alt="project" width={634} height={317} className="mx-auto rounded" />
            : <Img src={image} alt="project" width={634} height={317} className="mx-auto rounded" priority />
          }
        </CardContent>
        <CardFooter className="flex-wrap">
          <Badge variant="secondary" >{year}</Badge>
          {tags && tags.map(tag => <Badge variant="secondary" key={tag}>{tag}</Badge>)}
        </CardFooter>
      </Link>
    </Card>
  )
}