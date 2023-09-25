import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Room = () => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/room/${params?.roomId}`);
  };
  return <div>Rooms</div>;
};

export default Room;
