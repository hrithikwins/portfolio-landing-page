import { FC } from "react";
import "./app.css";

const RootLayout: FC = ({ children }) => {
  return (
    <>
      <html>
        <head></head>
        <body>
          <div>
            <div className="">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
};
export default RootLayout;
