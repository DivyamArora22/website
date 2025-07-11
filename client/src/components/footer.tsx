export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/DivyamArora22"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/divyamarora22"
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:divyama3@illinois.edu"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Divyam Arora. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
