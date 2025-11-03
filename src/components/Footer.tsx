import { communityLinks, platformLinks, resourcesLinks } from "@/data";


const Footer = () => {
  return (
    <footer className="relative max-w-7xl mx-auto px-6 mt-10 w-full">
      <div className="border-t border-neutral-700/80  ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-3 p-3 ">
          <div>
            <h3 className="text-lg dark:font-medium font-semibold mb-4">Resource</h3>
            <ul className="space-y-2 dark:text-neutral-400">
              {resourcesLinks.map((resource) => (
                <li key={resource.id}>
                  <a href={resource.href}>{resource.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg dark:font-medium font-semibold  mb-4">Platform</h3>
            <ul className="space-y-2 dark:text-neutral-400">
              {platformLinks.map((platform) => (
                <li key={platform.id}>
                  <a href={platform.href}>{platform.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg dark:font-medium font-semibold  mb-4">Community</h3>
            <ul className="space-y-2 dark:text-neutral-400">
              {communityLinks.map((community) => (
                <li key={community.id}>
                  <a href={community.href}>{community.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
