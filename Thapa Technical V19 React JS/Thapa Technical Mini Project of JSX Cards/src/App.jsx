import { Drama } from "./Components/Drama";

export const App = () => {
  return (
    <section className="container">
      <h1 style={{ marginBottom: "3rem" }}>
        Pakistani Master Pieces Dramas From 2018 - 2024
      </h1>
      <Drama />
    </section>
  );
};
