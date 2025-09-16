/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getAllSpecialties } from "@/services/Specitlies";
import { ISpecialty } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

export default function FilterSidebar() {
  const [isLoading, setIsLoading] = useState(false);
  const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchSpecialties = async () => {
      setIsLoading(true);
      try {
        const res = await getAllSpecialties();
        setSpecialties(res?.data || []);
      } catch (error: any) {
        console.error(error);
        toast.error("Failed to fetch filters");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSpecialties();
  }, []);

  const handleSearchQuery = (query: string, value: string | number | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null || value === "") {
      params.delete(query);
    } else {
      params.set(query, value.toString());
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">Filters</h2>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => router.push(`${pathname}`, { scroll: false })}
            size="sm"
            variant="outline"
            className="rounded-full text-sm font-medium px-3 py-1 border-purple-300 text-purple-600 hover:bg-purple-50 hover:text-purple-800 transition"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Price Sort */}
      <div className="mb-8">
        <p className="font-semibold mb-3 text-gray-700">Sort by Price</p>
        <RadioGroup className="flex flex-col gap-3">
          {[
            { label: "Low to High", value: "Low" },
            { label: "High to Low", value: "High" },
          ].map((option) => (
            <Label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-200 p-3 hover:border-purple-400 hover:bg-purple-50 transition"
            >
              <RadioGroupItem
                id={option.value}
                value={option.value}
                checked={searchParams.get("priceSort") === option.value}
                onClick={() => handleSearchQuery("priceSort", option.value)}
                className="text-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              {option.label}
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Specialty */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Specialty</h2>
        {!isLoading && (
          <RadioGroup className="space-y-2">
            {specialties.map((item) => (
              <Label
                key={item.id}
                htmlFor={item.title}
                className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-200 p-3 hover:border-purple-400 hover:bg-purple-50 transition"
              >
                <RadioGroupItem
                  onClick={() => handleSearchQuery("specialties", item.title)}
                  value={item.title}
                  id={item.title}
                  className="text-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                {item.title}
              </Label>
            ))}
          </RadioGroup>
        )}
      </div>

      {/* Gender start */}
      <div className="mb-8">
        <p className="font-semibold mb-3 text-gray-700">Gender</p>
        <div className="flex flex-col gap-3">
          {["MALE", "FEMALE"].map((gender) => (
            <Label
              key={gender}
              className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-200 p-3 hover:border-purple-400 hover:bg-purple-50 transition"
            >
              <Checkbox
                checked={selectedGender === gender}
                onCheckedChange={(checked) =>
                  setSelectedGender(checked ? gender : null)
                }
                onClick={() =>
                  handleSearchQuery(
                    "gender",
                    selectedGender === gender ? null : gender
                  )
                }
                className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              {gender}
            </Label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Rating</h2>
        <RadioGroup className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <Label
              key={rating}
              htmlFor={`rating-${rating}`}
              className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-200 p-3 hover:border-purple-400 hover:bg-purple-50 transition"
            >
              <RadioGroupItem
                onClick={() => handleSearchQuery("rating", rating)}
                value={`${rating}`}
                id={`rating-${rating}`}
                className="text-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < rating ? "#9333ea" : "#e5e7eb"} 
                    stroke={i < rating ? "#9333ea" : "#e5e7eb"}
                  />
                ))}
              </div>
            </Label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
