import MeetupList from "../../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    address: "dom twojej starej",
    image:
      "https://www.google.pl/url?sa=i&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D2881844876%26searchtext%3D&psig=AOvVaw1oXrPdHNdfsPatshCEkHaJ&ust=1670187495754000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCtnrWr3vsCFQAAAAAdAAAAABAJ",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    address: "dom twojej siostry",
    image:
      "https://www.google.pl/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fphotos%2F2410453-heavy-like-a-brinks-truck&psig=AOvVaw1oXrPdHNdfsPatshCEkHaJ&ust=1670187495754000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCtnrWr3vsCFQAAAAAdAAAAABAO",
    description: "this is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
