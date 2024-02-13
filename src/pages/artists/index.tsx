import { FC, useCallback } from "react";
import { useGetArtists } from "@queries/artists";
import { ArtistSortOptions } from "@api/artists";
import { CommonList } from "@components/common-list";
import { useNavigate } from "react-router-dom";
import { Loading } from "@components/loading";

export const ArtistsPage: FC = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetArtists("artistsList", {
    limit: 25,
    order: ArtistSortOptions.PopularityTotal,
  });

  const redirectArtist = useCallback(
    (id: number) => navigate(`/artist/${id}`),
    [navigate]
  );

  return (
    <>
      {isLoading ? (
        <Loading verticalSize={30} />
      ) : (
        <CommonList
          onCallBack={redirectArtist}
          title="Список артистов"
          data={data}
        />
      )}
    </>
  );
};
