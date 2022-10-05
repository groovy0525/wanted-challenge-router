interface Props {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({ to = "", children }) => {
  const handleClick = () => {
    window.history.pushState(null, "", to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
