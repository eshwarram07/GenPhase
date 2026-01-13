export default function Contact() {
return (
<section className="py-20 px-10 bg-gray-900 text-white text-center">
<h2 className="text-4xl font-bold mb-6">Talk to Our Experts</h2>
<p className="max-w-2xl mx-auto mb-10 opacity-80">
Let us know your requirements and we’ll get back to you.
</p>
<form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="p-3 rounded bg-gray-800 border border-gray-700" placeholder="Name" />
<input className="p-3 rounded bg-gray-800 border border-gray-700" placeholder="Email" />
<input className="p-3 rounded bg-gray-800 border border-gray-700 col-span-2" placeholder="Company" />
<textarea className="p-3 rounded bg-gray-800 border border-gray-700 col-span-2" placeholder="Message" />
<button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold col-span-2">
Submit
</button>
</form>
</section>
);
}