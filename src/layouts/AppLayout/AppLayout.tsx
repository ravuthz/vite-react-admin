import './AppLayout.less';

const AppLayout = ({ style, children }: BaseLayout) => {
  return (
    <div style={style} className="AppLayout">
      {children}
    </div>
  );
};

export default AppLayout;
