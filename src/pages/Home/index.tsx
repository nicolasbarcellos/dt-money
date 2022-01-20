import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import { useCollection } from "../../hooks/useCollection";

export function Home() {


  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}
