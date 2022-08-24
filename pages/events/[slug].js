import Layout from "../../components/Layout";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { API_URL } from "../../config/index";
import styles from "../../styles/Event.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function EventPageId({ evt }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image.formats.large.url} alt='img' width={960} height={600} />
          </div>
        )}

        <h3>Performer: {evt.performers}</h3>
        <h3>Description: {evt.description}</h3>
        <h3>Venue: {evt.venue}</h3>
        <p>Address: {evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// getStaticPaths and getStaticProps should be used together

/* export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps({params: {slug}}) {
 
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  console.log(events);
  return {
    props: {
      evt: events[0]
    },
    revalidate: 1
  }
} */

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}