import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="h-screen flex justify-center items-center p-4">
        <div className="flex-col flex text-5xl ">
          <Link to="/ex1" className="text-white">
            P7 - Todo List
          </Link>
          <Link to="/ex2" className="text-white">
            P8 - Styled Components
          </Link>
          <Link to="/ex3" className="text-white">
            P9 - ATM (redux)
          </Link>
          <Link to="/ex4" className="text-white">
            P10 - Cat API (rtk thunks & rtk query)
          </Link>
        </div>
      </div>
    </>
  );
}
