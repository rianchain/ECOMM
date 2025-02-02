import db from "@/lib/db";
import { BannerClient } from "./components/client";
import { BannerColumn } from "./components/column";

import { format } from "date-fns";

const BannersPage = async ({ params }: { params: { storeId: string } }) => {
  const banners = await db.banner.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBanners: BannerColumn[] = banners.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "dd MMM, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-6 p-8 pt-6">
        <BannerClient data={formattedBanners} />
      </div>
    </div>
  );
};

export default BannersPage;
