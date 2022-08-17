import Layout from "../components/Layout";
import EventItem from "../components/EventItem";
import { API_URL } from "../config/index";
import Link from 'next/link';

export default function HomePage({ events }) {
  //console log output on the client
  //console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.lengthj === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View all events</a>
        </Link>
      )}
    </Layout>
  );
}

// equal to componendDidMount or useEffect() hook
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // console log output will in the terminal not on in the dev tools in client/browser
  //console.log(events);

  // return an object
  return {
    // props: { events },
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
