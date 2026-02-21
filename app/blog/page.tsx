import './Blog.css';

export default async function Blog({params}: any) {
    const { slug } = await params;
  return (
    <>
      <h1>dobry dzien</h1>
    </>
  );
}
