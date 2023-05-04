import Meta from "layouts/meta";

const Error = ({ statusCode }: any) => {
  return (
    <>
      <Meta title="Error" />
      <h3 className="">Error</h3>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
