export default function Footer() {
  return (
    <footer className="bg-[#6B4226] text-white px-5 ">
      <section className="py-14 grid md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h3 className="text-orange-400 italic text-lg">Chuks Kitchen</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-200 max-w-xs">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Home</li>
            <li>Explore</li>
            <li>My Order</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Tola Blvd, Lagos, Nigeria</li>
          </ul>
        </div>
        {/* SOCIAL */}
        <div>
          <ul className="space-y-2 text-sm text-gray-200 mt-8 md:mt-0">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>

      <p className="mt-8 text-xs text-gray-300 text-center border-t pt-4 px-10 pb-5">
        © {new Date().getFullYear()} Chucks Kitchen. All rights reserved.
      </p>
    </footer>
  );
}