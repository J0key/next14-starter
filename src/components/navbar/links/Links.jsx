
export default function Links({ className }) {
  const links = [
    { title: 'Homepage', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
  ];

  return (
    <div>
      {links.map((link) => (
        <navLink
          item={link}
          className={`hover:bg-white hover:text-black py-2 px-4 rounded-full ${className}`}
          key={link.title}
        />
      ))}
    </div>
  );
}
