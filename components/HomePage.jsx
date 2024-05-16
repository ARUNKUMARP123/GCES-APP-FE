import { Banner } from "./Banner";
import { BannerHeader } from "./BannerHeader";

export const HomePage = () => {
  return (
    <div style={{ height: "auto", width: "auto" }}>
      <BannerHeader />
      <Banner />
    </div>
  );
};
