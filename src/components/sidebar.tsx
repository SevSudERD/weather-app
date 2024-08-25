

import { Picker } from "./picker";

type Props = {
  city: string;
  lat: string;
  long: string;
};

export function Sidebar({ city, lat, long }: Props) {
  return (
    <div className="w-full p-10 bg-gradient-to-b from-gray-600 via-gray-300  to-gray-100 lg:w-[480px]">
      <div className="pb-5">
        <h1 className="text-4xl font-bold text-white mt-2">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-200">
          Lat/Long: {lat}, {long}
        </p>
      </div>

      <div className="pt-0 pb-0">
        <Picker />
      </div>
    </div>
  );
}