import { useParams } from "react-router";

export default function Profile() {
  const params = useParams();
  return <h1>Hello {params.username}!</h1>;
}
