const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {year}</p>
    </div>
  );
};

export default Footer;
