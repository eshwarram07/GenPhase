export default function Insights() {
const insights = [
{ title: "AI Adoption Across Industries" },
{ title: "Responsible AI Explained" },
{ title: "AI in Healthcare" }
];


return (
<section className="py-20 bg-gray-50 px-10">
<h2 className="text-4xl font-bold text-center mb-10">Latest Insights</h2>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
{insights.map((i) => (
<div key={i.title} className="p-6 bg-white rounded-xl shadow">
<h3 className="text-lg font-semibold mb-2">{i.title}</h3>
<p className="text-blue-600 text-sm font-semibold mt-4">Read More →</p>
</div>
))}
</div>
</section>
);
}