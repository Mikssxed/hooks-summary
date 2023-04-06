import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavbarPage from "./NavbarPage";
import NewPost, {
  action as learnAction,
  loader as postsLoader,
} from "./NewPost";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarPage />, //it will be visible on every page in children
    children: [
      { path: "/", element: <App /> }, //main route
      {
        path: ":create-post",
        element: <NewPost />,
        loader: postsLoader,
        action: learnAction,
      }, //another page
    ],
  },
]);

//zamiast <App> w index.js dajemy <RouterProvider router={router} />
//wrap component with <Modal> to be layout??
//zamiast eventow itp mozna dac <Link to="/page"> (on jest lepszy bo nie powoduje
// ladowania wszystkiego od nowa) zeby przekierowac
//na strony zamiast np robic funkcje ktora poakzuje overlay jakis
// jak chciałbym wyłączyć taki overlay klikając np. na tło
// uzywamy const navigate = useNavigate i robimy funkcje
// function closeHandler() {
//      navigate('/') i dajemy adres page lub ".." i to cofa o jedno
// }
//
//loader odpala funkcje przy wczytaniu danej strony
