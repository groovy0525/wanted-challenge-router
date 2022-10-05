interface Props {
  children?: React.ReactNode;
}

const Router: React.FC<Props> = ({ children }) => {
  return <></>;
};

interface RouteProps extends Props {
  path: string;
}

const Route: React.FC<RouteProps> = ({ path, children }) => {
  return <></>;
};

export default Router;
