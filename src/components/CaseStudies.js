export default function CaseStudies() {
const cases = [
{ title: "AI-Enhanced Radiology", desc: "Improved imaging workflows." },
{ title: "Life Sciences AI Assistant", desc: "Automated documentation." },
{ title: "AI Digital Pathology", desc: "Automated tumor detection." }
];


return (
<section className="py-20 px-10">
<h2 className="text-4xl font-bold text-center mb-10">Case Studies</h2>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
{cases.map((c) => (
<div key={c.title} className="p-6 bg-white shadow rounded-2xl">
<h3 className="text-xl font-bold mb-3">{c.title}</h3>
<p className="text-gray-600 text-sm">{c.desc}</p>
</div>
))}
</div>
</section>
);
}