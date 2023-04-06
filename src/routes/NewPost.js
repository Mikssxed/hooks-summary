import { Form } from "react-router-dom";

const NewPost = () => {
  return;
  <Form method="post"></Form>; //form but with react routers
};

export default NewPost;

export async function loader() {
  const fetching = await fetch();
  const data = await fetching.json();
  return data.posts;
}
//przykladowa funkcja ktora jest wykorzystywana przy wczytaniu strony
//mozna tej funkcji uzyc zeby otrzymac dane za pomoca useLoaderData

export function action() {
  //some stuff and logic
}
