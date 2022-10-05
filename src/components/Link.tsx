interface Props {
  to: string;
  children: React.ReactNode;
  onClick: (path: string) => void;
}

const Link: React.FC<Props> = ({ to = "", children, onClick }) => {
  const handleClick = () => {
    onClick(to);
    window.history.pushState({}, "", to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
