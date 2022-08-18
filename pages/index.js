import Layout from "../components/Layout";
import EventItem from "../components/EventItem";
import { API_URL } from "../config/index";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

     {/* {arr.map((el) => el.data.map((el) => <EventItem key={el.id} evt={el} />))} */}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

    {/*  {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View all events</a>
        </Link>
      )} */}
    </Layout>
  );
}

// equal to componendDidMount or useEffect() hook
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  // return an object
  return {
    // props: { events },
    props: { events },
    revalidate: 1,
  };
}
