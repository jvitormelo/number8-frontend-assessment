import { RealStateFilterSection } from "@/modules/real-estate/components/filter";
import { RealEstateList } from "@/modules/real-estate/components/list";
import { RealEstate, RealEstateFilter } from "@/modules/real-estate/types";
import { Stack } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  realState: RealEstate[];
  initialFilters: RealEstateFilter;
};

export function RealEstatesView({ initialFilters, realState }: Props) {
  return (
    <Stack component={"main"}>
      <Filters
        key={JSON.stringify(initialFilters)}
        initialFilters={initialFilters}
      />
      <RealEstateList realEstates={realState} />
    </Stack>
  );
}

function Filters({ initialFilters }: { initialFilters: RealEstateFilter }) {
  const { push } = useRouter();
  const [filter, setFilter] = useState<RealEstateFilter>(initialFilters);

  async function search(filter: RealEstateFilter) {
    await push({ query: filter });
  }

  async function clear() {
    await push({ query: {} });
  }

  return (
    <RealStateFilterSection
      filter={filter}
      setFilter={(newValue) => setFilter((old) => ({ ...old, ...newValue }))}
      search={search}
      clear={clear}
    />
  );
}
