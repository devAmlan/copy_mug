"use client";
import { Button } from "@/components/ui/button";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";
import React, { useState, useEffect } from "react";

function UsageTrack() {
  const [credit, setCredit] = useState(0);
  const { user } = useUser();

  const getTotalUsage = (result) => {
    let total = 0;

    total += Number(result?.aiResponse?.length);

    return total;
  };

  const trackUsage = async () => {
    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      const userCredit = getTotalUsage(_.first(result));
      console.log(userCredit);
      setCredit(userCredit);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log("track");
  //   trackUsage();
  // }, []);

  return (
    <div className="absolute bottom-5 w-[calc(100%-40px)] h-28 border-0 rounded bg-primary flex justify-center items-center flex-col gap-5">
      <div className="flex justify-center items-center text-white gap-2">
        <h3 className="font-semibold text-base">Credit:</h3>
        <h3 className="font-semibold text-sm">{credit}/1000</h3>
      </div>
      <Button variant="outline">Upgrade</Button>
    </div>
  );
}

export default UsageTrack;
