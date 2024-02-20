import { RealState } from "@/modules/real-state/types";
import Mock from "@/../public/mock.json";

type RealStateResponse = {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
};

export const getRealState = async (): Promise<RealState[]> => {
  const data: RealStateResponse[] = Mock;

  return data.map((realState) => ({
    bathrooms: realState.Bathrooms,
    bedrooms: realState.Bedrooms,
    dateListed: realState.DateListed,
    description: realState.Description,
    id: realState.Id,
    location: realState.Location,
    parking: realState.Parking,
    pictureURL: realState.PictureURL,
    salePrice: realState["Sale Price"],
    sqft: realState.Sqft,
    thumbnailURL: realState.ThumbnailURL,
    title: realState.Title,
    yearBuilt: realState.YearBuilt,
  }));
};
