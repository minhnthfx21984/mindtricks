import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Alert from "@/components/Alert";

import ToggleReview from "@/components/ToggleReview";

const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false, // Tắt Server-Side Rendering
});

const RenderPost = dynamic(() => import("../components/RenderPost"), {
  ssr: false, // Tắt Server-Side Rendering
});

export default function CreatePost() {
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(true);
  const [alert, setAlert] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const sendToDatabase = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ creator: session.user.email, data: data }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  if (!session) {
    return <>Vui lòng đăng nhập và thử lại sau</>;
  }
  return (
    <>
      <div className="container mx-auto p-3">
        {alert && <Alert type="" message="" />}
        <div>
          <div className="flex justify-end items-center max-w-2xl mx-auto p-3">
            <ToggleReview isChecked={isEdit} setIsChecked={setIsEdit} />
          </div>

          {isEdit ? (
            <Editor
              data={data}
              onChange={setData}
              holder="editorjs-container"
            />
          ) : (
            data && <RenderPost data={data} />
          )}
        </div>
        <div className="max-w-2xl mx-auto p-3 flex justify-end">
          <button
            onClick={sendToDatabase}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            Lưu
          </button>
        </div>
      </div>
    </>
  );
}
