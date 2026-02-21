type BlogDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = await params;

  return (
    <>
      <h1>BLOG DETAILS</h1>
      <h2>{slug}</h2>
    </>
  );
}
