
export default function Card({ title, body }: any) {
  return (
    <div className="max-w-md mx-auto bg-green-900 text-green-100 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
      
      <h2 className="text-2xl font-bold mb-3 text-green-300">
        {title}
      </h2>

      <p className="text-sm leading-relaxed text-green-200">
        {body}
      </p>

    </div>
  );
}