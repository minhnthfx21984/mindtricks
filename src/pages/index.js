import { useState } from "react";
import RenderPost from "@/components/RenderPost";

export default function Home(props) {
  const [data, setData] = useState(props.data);
  return (
    <>
      <div className="container mx-auto p-3 pb-32">
        {data && data.map((d) => <RenderPost data={d.data} />)}
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  // Truy vấn dữ liệu từ MongoDB sử dụng model
  const response = await fetch(`/api/posts`, {
    method: "GET",
  });

  const data = await response.json();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data.reverse())),
    },
  };
}
