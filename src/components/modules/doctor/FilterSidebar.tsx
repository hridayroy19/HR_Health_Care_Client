"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface FilterSidebarProps {
  selectedGender: string | null;
  setSelectedGender: (gender: string | null) => void;
}

const FilterSidebar = ({
  selectedGender,
  setSelectedGender,
}: FilterSidebarProps) => {
  const [fee, setFee] = useState([8000]);
  const [rating, setRating] = useState(2);

  return (
    <div className="w-72 p-4 border rounded-xl shadow-sm bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Filter</h2>
        <Button variant="link" className="text-red-500 p-0 h-auto">
          Reset
        </Button>
      </div>

      {/* Consultation Fee */}
      <div className="mb-6">
        <p className="font-medium mb-2">Consultation Fee</p>
        <Slider
          value={fee}
          onValueChange={setFee}
          max={8000}
          step={100}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>Min: ৳0</span>
          <span>Max: ৳{fee}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">Gender</p>
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2">
            <Checkbox
              id="MALE"
              checked={selectedGender === "MALE"}
              onCheckedChange={(checked) =>
                setSelectedGender(checked ? "MALE" : null)
              }
            />{" "}
            MALE
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox
              id="FEMALE"
              checked={selectedGender === "FEMALE"}
              onCheckedChange={(checked) =>
                setSelectedGender(checked ? "FEMALE" : null)
              }
            />{" "}
            FEMALE
          </Label>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <p className="font-medium mb-2">Rating</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className={`cursor-pointer ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-2">
        <p className="font-medium mb-2">Sort by</p>
        <RadioGroup defaultValue="relevance" className="flex flex-col gap-2">
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="relevance" /> Relevance
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="popularity" /> Popularity
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="low" /> Fees: low to high
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="high" /> Fees: high to low
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="rating" /> Rating
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="experience" /> Experience
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="specialist" /> Specialist First
          </Label>
          <Label className="flex items-center gap-2">
            <RadioGroupItem value="ranking" /> Ranking
          </Label>
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterSidebar;
