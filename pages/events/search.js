import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import EventItem from "../../components/EventItem";
import { API_URL } from "../../config/index";
import styles from "../../styles/Search.module.scss";

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <Link href="/events">
        <a className={styles.back}>Go Back</a>
      </Link>
      <h1>Search Results for: "{router.query.term}"</h1>
      <h1>Events</h1>
      {events.lengthj === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

// equal to componendDidMount or useEffect() hook
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  // console log output will in the terminal not on in the dev tools in client/browser
  //console.log(events);

  // return an object
  return {
    props: { events },
  };
}

