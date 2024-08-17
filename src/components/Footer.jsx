const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} LootStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
