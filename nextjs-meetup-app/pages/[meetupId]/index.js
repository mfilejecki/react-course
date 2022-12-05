import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://i.kym-cdn.com/entries/icons/facebook/000/041/215/heavy_like_a_brinks_truck.jpg"
      title="First Meetup"
      address="dom twojej starej"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://i.kym-cdn.com/entries/icons/facebook/000/041/215/heavy_like_a_brinks_truck.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "dom twojej starej",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
