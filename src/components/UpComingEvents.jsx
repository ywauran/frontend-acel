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
      <h3 className="text-3xl font-bold text-center my-5">
        Kegiatan yang akan Diselenggarkan
      </h3>
      <div className="grid grid-cols-5 place-content-center gap-5 place-items-center p-4">
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
