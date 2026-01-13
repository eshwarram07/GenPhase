export default function Solutions() {
const items = [
{ title: "AI Strategy & Readiness", desc: "Build a clear path from strategy to production." },
{ title: "Custom AI Solution Development", desc: "Production-ready AI and digital systems." },
{ title: "Enterprise AI Scaling", desc: "Scale AI across the enterprise." },
{ title: "Responsible AI & Governance", desc: "Ethical and compliant AI frameworks." }
];


return (
<section className="py-20 px-10">
    
<h2 className="text-4xl font-bold text-center mb-10">AI Transformation Services</h2>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{items.map((item) => (
<div key={item.title} className="p-6 bg-white rounded-2xl shadow">
<h3 className="text-xl font-bold mb-3">{item.title}</h3>
<p className="text-gray-600 text-sm">{item.desc}</p>
</div>
))}
</div>
</section>

);
}