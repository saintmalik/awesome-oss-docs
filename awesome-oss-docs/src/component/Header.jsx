import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="bg-bgColor p-4 md:p-8 lg:p-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Awesome OSS Docs
          </div>
          <div className="hidden md:flex gap-4 text-white">
            <SocialMediaLink
              icon={<BsDiscord className="text-2xl" />}
              text="Discord"
            />
            <SocialMediaLink
              icon={<BsTwitter className="text-2xl" />}
              text="Twitter"
            />
            <SocialMediaLink
              icon={<BsYoutube className="text-2xl" />}
              text="Youtube"
            />
            <SocialMediaLink
              icon={<BsGithub className="text-2xl" />}
              text="Github"
            />
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

const SocialMediaLink = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    <p className="text-lg font-medium">{text}</p>
  </div>
);

const MobileMenu = () => (
  <div className="md:hidden">
    <button className="text-2xl text-white">
      <BsDiscord className="mr-2" />
      <BsTwitter className="mr-2" />
      <BsYoutube className="mr-2" />
      <BsGithub className="mr-2"/>
    </button>
  </div>
);

export default Header;
