import React from "react";
import Event from "./Event";

const UpComingEvents = () => {
  const data = [
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
    {
      nameEvent: "Example Event",
      time: "23 agustus 2023, 17:00 WITA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nisi quos assumenda distinctio facilis mollitia exercitationem omnis optio, ipsam sapiente corrupti beatae at alias dolorem hic. Accusamus quos veritatis temporibus?",
    },
  ];
  return (
    <div>
      <h3 className="my-5 text-3xl font-bold text-center">
        Kegiatan yang akan Diselenggarkan
      </h3>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-max place-content-center place-items-center">
        {data.map((item, index) => (
          <Event
            key={index + 1}
            time={item.time}
            nameEvent={item.nameEvent}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UpComingEvents;
