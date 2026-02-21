type BlogDetailsProps ={
    params: Promise<{id: string}>;
}

export default async function Blog({params}: any) {
    const { id } = await params;
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}