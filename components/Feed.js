import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";

import Input from "./Input";
import { db } from "../firebase";
import Post from "./Post";

const Feed = () => {

  const [posts, setPosts] = useState([]);

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  // console.log("posts", posts.data());

  return (
    <div className="text-white xl:ml-[370px] sm:ml-[73px] border-r border-l border-gray-700 max-w-2xl flex-grow h-screen">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-4 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-xl">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />

      <div className="pb-72">
        { posts && posts.map(post => (
          <Post key={post.id} post={post.data()} />
        )) }
      </div>

    </div>
  );
};

export default Feed;


// 51232616