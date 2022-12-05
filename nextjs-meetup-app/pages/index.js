import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { MONGODBAPIROUTE } from "../components/important/vars";

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(MONGODBAPIROUTE);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
}

export default HomePage;
