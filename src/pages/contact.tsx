const Contact = ({ global }: any) => {
  const { sections } = global;
  return (
    <div>
      <h1>Contact page</h1>
      <div>
        {sections?.map((el: any) => {
          return <div key={el.sectionName}>{el.sectionName}</div>;
        })}
      </div>
    </div>
  );
};

export default Contact;
