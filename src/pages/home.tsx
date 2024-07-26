const Home = ({ global }: any) => {
  const { sections } = global;
  return (
    <div>
      <h1>Home</h1>
      <div>
        {sections?.map((el: any) => {
          return <div key={el.sectionName}>{el.sectionName}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
