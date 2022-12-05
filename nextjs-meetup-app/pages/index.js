import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    address: "dom twojej starej",
    image:
      "https://i.kym-cdn.com/entries/icons/facebook/000/041/215/heavy_like_a_brinks_truck.jpg",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    address: "dom twojej siostry",
    image: "https://i.kym-cdn.com/photos/images/newsfeed/002/410/453/f2a.jpg",
    description: "this is a second meetup",
  },
];

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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;