const Layout = ({ children }) => {
  return (
    <div className="mt-24 flex flex-col items-center min-[470px]:mt-20">
      {children}
    </div>
  );
};

export default Layout;
