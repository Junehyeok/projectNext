const staticPage = ({ time }) => {
  return <div>{time}</div>;
};

//빌드 시 데이터를 가져온다.
export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};

export default staticPage;
